import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const pdfUrl =
  "https://brave-skunk-163.convex.cloud/api/storage/1ca3a54c-eb57-4843-9128-bfaada94551d";
export async function GET(req) {
  //1.Load the PDF
  const response = await fetch(pdfUrl);
  const data = await response.blob();
  const loader = new WebPDFLoader(data);
  const docs = await loader.load();

  let pdfTextContent = "";
  docs.forEach((doc) => {
    pdfTextContent = pdfTextContent + doc.pageContent;
  });

  //2. Split the Text into Small Chunks
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 20,
  });
  const output = await splitter.createDocuments([pdfTextContent]);

  let splitterList = [];
  output.forEach(doc=>{
    splitterList.push(doc.pageContent);
  });

  return NextResponse.json({ result: splitterList });
}

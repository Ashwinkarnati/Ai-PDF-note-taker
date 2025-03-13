import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import EditorExtension from "./EditorExtension";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Start Taking Your Notes..." }),
      Underline,
      Highlight,
      TextAlign.configure({
        types: ["paragraph", "heading"],
        alignments: ["left", "center", "right"]
      }),
      BulletList,
      OrderedList,
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none h-[89vh] p-5",
      },
    },
  });

  return (
    <div>
      <EditorExtension editor={editor} />
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;

import {
    Bold,
    Highlighter,
    Italic,
    Strikethrough,
    AlignLeft,
    AlignCenter,
    AlignRight,
    UnderlineIcon,
    List,
    ListOrdered,
    Undo,
    Redo,
  } from "lucide-react";
  import React from "react";
  
  const EditorExtension = ({ editor }) => {
    return (
      editor && (
        <div className="p-5">
          <div className="control-group">
            <div className="button-group flex gap-3">
              {/* Text Formatting */}
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "text-blue-900" : ""}
              >
                <Bold />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "text-blue-900" : ""}
              >
                <Italic />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleMark("underline").run()}
                className={editor.isActive("underline") ? "text-blue-900" : ""}
              >
                <UnderlineIcon />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "text-blue-900" : ""}
              >
                <Strikethrough />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={editor.isActive("highlight") ? "text-blue-900" : ""}
              >
                <Highlighter />
              </button>
  
              {/* Headings */}
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive("heading", { level: 1 }) ? "text-blue-900" : ""}
              >
                H1
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive("heading", { level: 2 }) ? "text-blue-900" : ""}
              >
                H2
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive("heading", { level: 3 }) ? "text-blue-900" : ""}
              >
                H3
              </button>
  
              {/* Text Alignment */}
              <button
                onClick={() => editor.chain().focus().setTextAlign("left").run()}
                className={editor.isActive({ textAlign: "left" }) ? "text-blue-900" : ""}
              >
                <AlignLeft />
              </button>
              <button
                onClick={() => editor.chain().focus().setTextAlign("center").run()}
                className={editor.isActive({ textAlign: "center" }) ? "text-blue-900" : ""}
              >
                <AlignCenter />
              </button>
              <button
                onClick={() => editor.chain().focus().setTextAlign("right").run()}
                className={editor.isActive({ textAlign: "right" }) ? "text-blue-900" : ""}
              >
                <AlignRight />
              </button>
  
              {/* Lists */}
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "text-blue-900" : ""}
              >
                <List />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "text-blue-900" : ""}
              >
                <ListOrdered />
              </button>
  
              {/* Undo/Redo */}
              <button onClick={() => editor.chain().focus().undo().run()}>
                <Undo />
              </button>
              <button onClick={() => editor.chain().focus().redo().run()}>
                <Redo />
              </button>
            </div>
          </div>
        </div>
      )
    );
  };
  
  export default EditorExtension;
  
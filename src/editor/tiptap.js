import { Editor } from "tiptap";
import { Bold, Italic, Underline, Heading, History } from "tiptap-extensions";

export const ourEditor = new Editor({
  extensions: [
    new Bold(),
    new Italic(),
    new Underline(),
    new Heading({ levels: [1, 2, 3] }),
    new History()
  ]
});

<template>
  <div class="tiptap-editor">
    <EditorMenuBar
      class="editor-menubar"
      :editor="editor"
      v-slot="{ commands, isActive }"
    >
      <div>
        <button
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          B
        </button>
        <button
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          I
        </button>
        <button
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          U
        </button>

        <button
          v-for="level in [1, 2, 3]"
          :key="level"
          :class="{ 'is-active': isActive.heading({ level }) }"
          @click="commands.heading({ level: level })"
        >
          H{{ level }}
        </button>
      </div>
    </EditorMenuBar>
    <EditorContent class="editor-content" :editor="editor" />
  </div>
</template>

<script>
import { EditorContent, EditorMenuBar } from "tiptap";
import { ourEditor } from "./tiptap";

export default {
  name: "Tiptap",
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: ourEditor
    };
  },
  beforeDestroy() {
    ourEditor.destroy();
  }
};
</script>

<style>
.tiptap-editor {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.editor-menubar {
  margin: 0 0 20px 0;
}
.editor-content {
  max-width: 35em;
  min-width: 35rem;
  display: block;
  text-align: unset;
  border-radius: 20px;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.363);
}
.ProseMirror {
  min-height: 30vh;
  padding: 2px;
  outline: none;
}
button {
  padding: 20px;
  margin: 0 5px;
  background: white;
  outline: none;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 1.3rem;
  transition: 0.2s all;
  min-width: 5rem;
}
button:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  transition: none;
}
button.is-active {
  background: rgba(0, 128, 0, 0.2);
}
</style>

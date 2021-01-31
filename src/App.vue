<template>
  <div id="app">
    <tiptap />
  </div>
</template>

<script>
import { Tiptap } from "./editor";

export default {
  name: "App",
  components: {
    Tiptap
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

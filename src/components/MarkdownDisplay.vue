<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
</template>

<script>
import marked from "marked";
import hljs from "highlight.js/lib/core";
import jsHighlight from "highlight.js/lib/languages/javascript";
import mdHighlight from "highlight.js/lib/languages/markdown";
import xmlHighlight from "highlight.js/lib/languages/xml";
import cssHighlight from "highlight.js/lib/languages/css";
import pythonHighlight from "highlight.js/lib/languages/python";
export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  mounted() {
    hljs.registerLanguage("javascript", jsHighlight);
    hljs.registerLanguage("markdown", mdHighlight);
    hljs.registerLanguage("xml", xmlHighlight);
    hljs.registerLanguage("css", cssHighlight);
    hljs.registerLanguage("python", pythonHighlight);
    hljs.highlightAll();
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown);
    }
  },
}
</script>

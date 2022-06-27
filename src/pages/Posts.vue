<template>
  <q-page class="q-mt-xl q-pt-md q-mx-xl">
    <div v-if="project_meta">
      <div class="text-h4 text-secondary text-weight-bold">
        {{ project_meta.post.title }}
      </div>
      <div class="text-subtitle1 text-weight-thin">
        {{ project_meta.post.date }}
      </div>
      <q-chip 
        square
        size="lg"
        color="primary" 
        text-color="white" 
        v-for="(tag, index) in project_meta.post.tags" 
        :key="index"
      >
        {{ tag }}
      </q-chip>
      <q-separator class="q-my-md" />

    </div>

    <q-markdown v-if="markdown" :src="markdown" />
  </q-page>
</template>

<script>
import Projects from "../data/projects.json";
import 'prismjs/components/prism-python';

export default {
  data() {
    return {
      markdown: null,
      project_meta: null,
    };
  },
  methods: {
    getMarkdown() {
      const project_id = this.$route.params.project_id;
      this.project_meta = Projects.find((project) => project.id === project_id);

      return import(`../assets/posts/${this.project_meta.post.filename}`)
        .then((res) => {
          this.markdown = res.default;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getMarkdown();
  },
};
</script>

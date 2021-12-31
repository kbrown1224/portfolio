<template>
  <q-page class="q-mt-md q-px-xl">
    <div class="text-h4 text-center text-primary text-weight-thin">
      Things I build in my (limited) spare time
    </div>
    <div class="text-subtitle text-center text-primary q-my-sm">
      It's not much yet, but I'm working on it! Coming soon is a ML powered inventory management system for Etsy shops, a web app for tracking workouts, and a reinforcement learning system with a CLI to test it out.
  </div>
    <q-separator class="q-my-md" />

    <div class="row" v-for="(project, index) in projects" :key="index">
      <div class="col-4">
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">
              {{ project.name }}
              <q-badge
                v-if="project.workInProgress"
                class="text-primary"
                color="white"
              >Work In Progress</q-badge>
            </div>
          </q-card-section>

          <q-card-section>{{ project.description }}</q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn flat :href="project.githubRepo" target="_blank">Github Repo</q-btn>
            <q-btn v-if="project.postPage" flat :href="project.postPage">Blog Post</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        {
          name: 'My Portfolio',
          githubRepo: 'https://github.com/kbrown1224/portfolio',
          description: 'Not much of a description needed here, you are looking at it! This portfolio was build with Vue.js and the Quasar framework.',
          workInProgress: true,
          postPage: null,
        }
      ]
    }
  }
})
</script>

<style lang="scss">
.title-card {
  height: 75px;
  width: 400px;
  border-radius: 25px;
  background-image: linear-gradient(to bottom right, $primary, $secondary);
}
</style>

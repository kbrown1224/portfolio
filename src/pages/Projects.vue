<template>
  <q-page class="q-mt-md q-px-xl">
    <div class="text-h4 text-center text-primary text-weight-thin">
      {{ pageHeader}}
    </div>
    <div class="text-subtitle text-center text-primary q-my-sm">
      {{ pageSubHeader }}
  </div>
    <q-separator class="q-my-md" />

    <div class="fit row items-stretch">
      <div class="col-sm-12 col-md-4 q-mx-sm" v-for="(project, index) in projects" :key="index">
        <q-card class="my-card bg-secondary text-white" :style="{height: '250px'}">
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

          <div class="card-actions">
          <q-separator dark />

          <q-card-actions>
            <q-btn flat :href="project.githubRepo" target="_blank">Github Repo</q-btn>
            <q-btn v-if="project.postPage" flat :to="{ path: '/posts/' + project.postPage }">Blog Post</q-btn>
          </q-card-actions>
          </div>


        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import projects from '../data/projects';

export default defineComponent({
  name: 'ProjectsPage',
  data() {
    return {
      pageHeader: 'Things I build in my (limited) spare time',
      pageSubHeader: "It's not much yet, but I'm working on it! Coming soon is a ML powered inventory management system for Etsy shops, a web app for tracking workouts, and a reinforcement learning system with a CLI to test it out.",
      projects: projects
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

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-black">

        <q-space />

        <q-tabs dense indicator-color="secondary">
          <q-route-tab to='/' label="HOME" class="text-primary" />
          <q-route-tab to='/about' label="ABOUT" class="text-primary" />
          <q-route-tab to='/experience' label="EXPERIENCE" class="text-primary" />
          <q-route-tab to='/projects' label="PROJECTS" class="text-primary" />
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
      tab: ref('')
    }
  }
})
</script>

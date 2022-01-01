<template>
  <q-page class="q-mt-xl q-pt-md">
    <div class="fit row inline justify-evenly items-center content-center">
      <div class="col-sm-12 col-lg-4 offset-lg-1 self-stretch q-pl-4">
        <h2>
          <span class="text-secondary text-weight-thin">Kip </span>
          <span class="text-primary text-weight-medium">Brown</span>
        </h2>
        <h5 class="text-subtitle">
          <span class="text-primary text-weight-thin">Data Scientist</span>
          <span class="text-secondary"> & </span>
          <span class="text-primary text-weight-thin">Web Developer</span>
        </h5>
        <q-separator />
        <p class="text-body1 text-primary q-pt-xl">
          Hi there! This page serves as a resume and portfolio for me.
          It is very much a work in progress, but you have to start somewhere, right? 
          Feel free to check out my Github and Linkedin profiles, and if you have any questions,
          don't hesitate to contact me.
        </p>
        <q-separator />
        <div class="q-pa-md q-gutter-sm text-center">
          <q-btn round color="primary" icon="fab fa-github" href="https://github.com/kbrown1224" target="_blank"/>
          <q-btn round color="primary" icon="fab fa-linkedin-in" href="https://www.linkedin.com/in/kip-brown-903599125/" target="_blank" />
        </div>
      </div>
      <div class="col-7 self-stretch mobile-hide">
        <q-img src="~assets/dev.svg" width="100%" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage'
})
</script>

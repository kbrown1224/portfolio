<template>
  <q-page class="q-ml-xl q-mt-none q-mr-xl q-mb-xl">
    <div class="fit col">
      <div>
        <h6 class="text-weight-thin">Who am I?</h6>
        <q-separator />
        <p class="text-body1 text-primary q-pt-xl">
          Where to start?! Well, from a young age, I loved math and building things.
          As I got a bit older, I fell in love with writing code. This led me (eventually)
          to a career in tech. Professionally, I straddle a few roles: data scientist, web developer, and ML / dev ops.
          I try my best to show all of these skills in my side projects, but refer to the experience page for more details.
        </p>

        <p class="text-body1 text-primary q-pt-xl">
         On a personal note, I am a husband, a father, and an avid sports fan (go Cowboys!). I enjoy woodworking
         and tinkering with Rasperry Pis, which are mentioned a few times in my projects (coming soon).
        </p>
      </div>
      <div>
        <h6 class="text-weight-thin">What are my areas of interest?</h6>
        <q-separator />
        <div class="fit row justify-around items-stretch content-start q-mt-xl">
          <div v-for="(interest, index) in interests" class="col-md-3 q-mx-md q-my-sm" :key="index">
            <q-card bordered class="my-card shadow-24 fit">
              <q-card-section>
                <div class="text-h6 text-center text-white">{{ interest.name }}</div>
              </q-card-section>

              <q-separator dark inset class="bg-secondary" />

              <q-card-section class="text-white">{{ interest.description }}</q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div>
        <h6 class="text-weight-thin">What are my skills?</h6>
        <skills-chart />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import SkillsChart from '../components/charts/SkillsChart';
import interests from '../data/interests.json';

export default defineComponent({
  name: 'AboutPage',
  components: {
    SkillsChart
  },
  data() {
    return {
      interests: interests
    }
  }
})
</script>

<style lang="scss">
.my-card {
  border-radius: 25px;
  background-image: linear-gradient(to bottom right, $primary, $grey-7);
}
</style>

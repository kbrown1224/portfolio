<template>
  <q-page>
    <div class="q-px-xl q-mr-sm q-pb-md">
      <q-timeline layout="dense" color="secondary">
        <q-timeline-entry heading class="text-primary">Professional Experience</q-timeline-entry>

        <q-timeline-entry v-for="(event, index) in timeline" :key="index">
          <template v-slot:title>
            <div class="text-h5 text-secondary">{{ event.title }}</div>
            <div class="text-h6 text-weight-thin text-primary">{{ event.company }}</div>
          </template>
          <template v-slot:subtitle>
            {{ event.startDate }}
          </template>

          <q-card bordered class="my-card shadow-4">
              <q-card-section class="text-white">
                <ul>
                  <li v-for="(item, index) in event.highlights" :key="index">
                    <p class="text-body1">
                      <span class="text-bold">{{ item.summary }} - </span>
                      {{ item.detail }}
                    </p>
                  </li>
                </ul>
                <div v-if="event.tools.length > 0">
                  <q-separator />
                  <span class="text-bold text-secondary">Primary Tools: {{ event.tools.join(", ") }}</span>
                </div>
              </q-card-section>
            </q-card>
        </q-timeline-entry>

      </q-timeline>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import timeline from '../data/timeline'

export default defineComponent({
  name: 'ExperiencePage',
  data () {
    return {
      timeline: timeline
    }
  }
})
</script>

<style lang="scss">
.my-card {
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, $primary, $grey-7);
}
</style>


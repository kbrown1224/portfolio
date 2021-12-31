<template>
  <q-card class="bg-white q-pa-none full-width" style="height: 225px">
    <q-tabs v-model="tab" align="left" :breakpoint="0" @update:model-value="updateChart">
      <q-tab
        v-model="tab"
        v-for="(skill, index) in skills"
        :key="index"
        :name="skill.category"
        :label="skill.category"
      />
    </q-tabs>
    <q-card-section>
      <canvas id="bar-chart" />
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
import skills from '../../data/skills.js'

export default {

  data() {
    return {
      tab: skills[0].category,
      skills: skills,
      skillsChart: null,
    }
  },
  mounted() {
    this.skillsChart = this.createChart('bar-chart')
  },
  methods: {
    createChart(chartId) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: this.selectedSkills,
          datasets: this.selectedDatasets
        },
        options: {
          responsive:true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          scales: {
            xAxes: [{
              ticks: {
                max: 5,
                min: 0,
                stepSize: 1,
                callback: function (label, index, labels) {
                  switch (label) {
                    case 0:
                      return 'No Experience';
                    case 1:
                      return 'Hello World';
                    case 2:
                      return 'Basic Understanding';
                    case 3:
                      return 'Getting the Hang of It';
                    case 4:
                      return 'Very Compfortable';
                    case 5:
                      return 'Expertise';
                  }
                }
              }
            }]
          }
        }
      })
      return myChart
    },
    updateChart() {
      // console.log(this.tab)
      this.skillsChart.data.labels = this.selectedSkills
      this.skillsChart.data.datasets = this.selectedDatasets
      this.skillsChart.update()
    }
  },
  computed: {
    selectedSkills() {
      return this.skills.filter(skill => skill.category === this.tab)[0].labels
    },
    selectedDatasets() {
      return this.skills.filter(skill => skill.category === this.tab)[0].datasets
    },
  }
}
</script>

<style>
</style>
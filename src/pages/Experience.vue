<template>
  <q-page>
    <div class="q-px-xl q-mr-xl q-pb-md">
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

export default defineComponent({
  name: 'ExperiencePage',
  data () {
    return {
      timeline: [
        {
          title: 'Sr Data Scientist',
          company: 'Spectrum',
          startDate: 'January 2021',
          highlights: [
            { 
              summary: 'Truck Roll Optimization',
              detail: 'Project saving the company upwards of $40M per year. Reducing un-needed truck rolls by identifying customers no longer in need of maintenance. Used simulations and quantile regression to identify "healthy" devices to assist in the cancellation logic while maintaining positive customer experience using R, Python, Gradient Boosting, and FastAPI.'
            },
            {
              summary: 'Systems & Team Analysis Tool',
              detail: 'Reporting system for extracting, aggregating, and visualizing internal application log data. Included ticketing system for applications in error rate breach and additional data collection forms. Resulted in better system visibility and understanding, and decreased resolution times. Using Python, FastAPI, Chart.js, Vue.js, Postgres, Splunk, Docker.'
            },
            {
              summary: 'Data Engineering',
              detail: 'Develop suite of ETLs from a variety of sources from log aggregation tools and other databases.'
            },
            {
              summary: 'Leadership',
              detail: 'Technical leader of a small team of developers and data scientists. I mentor team members through detailed code reviews, paired programming sessions, and periodic 1-on-1 meetings. I work with upper management to plan features and future direction, then delegate work to team members in weekly sprint planning sessions. '
            }
          ],
          tools: [
            'Python',
            'FastAPI',
            'Vue.js',
            'Postgres'
          ]
        },
        {
          title: 'Data Scientist',
          company: 'Spectrum',
          startDate: 'January 2019',
          highlights: [
            {
              summary: 'Product Recommendation Engine',
              detail: 'Selected as project winner for enterprise wide idea kick starter program. Developed a REST service to predict most profitable product to attempt an upsell using a cross of concepts from reinforcement learning and traditional multi-label classification. Using Python, Keras, FastAPI, Elasticsearch, and Docker',
            }
          ],
          tools: [
            'Python',
            'Elasticsearch',
            'Mongo',
            'Docker'
          ]
        },
        {
          title: 'Sr Data and Reporting Analyst',
          company: 'Spectrum',
          startDate: 'March 2018',
          highlights: [
            {
              summary: 'Incident Management Tracker',
              detail: 'Developed analytic dashboard using the Shiny framework in R',
            },
            {
              summary: 'Order Analysis Dashboards',
              detail: 'Developed Tableau dashboards',
            },
            {
              summary: 'System Incident Detection',
              detail: 'Developed outlier detection process for quicker identification of system errors',
            },
            {
              summary: 'Data Engineering',
              detail: 'Developed improved data pipelines for our Tableau server, reducing run time by around 75% and reducing the number of workflows drastically',
            },
            {
              summary: 'Administration',
              detail: 'Admin for our teams Tableau server, Alteryx server, and Bitbucket repositories'
            }
          ],
          tools: [
            'R',
            'Tableau',
            'Alteryx',
            'MSSQL Server'
          ]
        },
        {
          title: 'Graduate Assistant',
          company: 'Southern Illinois University Edwardsville',
          startDate: 'January 2017',
          highlights: [
            {
              summary: 'Teaching',
              detail: 'Instructed undergraduate level statistics computing labs and quantitative reasoning course. 76% of students reported that I was "Extremely Helpful", an additional 15% reporting "Very Helpful"'
            }
          ],
          tools: []
        },
        {
          title: 'Mathematics Teacher',
          company: 'The Center for Educational Opportunities',
          startDate: 'August 2015',
          highlights: [
            {
              summary: 'Teaching',
              detail: 'Instructed 6th through 12th grade math classes by creating engaging lesson plans.'
            }
          ],
          tools: []
        }
      ]
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


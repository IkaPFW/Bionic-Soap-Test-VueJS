<script>
import {mapActions, mapState} from 'pinia'
import {useAppStore} from '../stores/app'
import JobButton from '../components/JobButton.vue'

export default {
  components: {
    JobButton
  },
  computed: {
    ...mapState(useAppStore, ['jobList'])
  },
  methods: {
    ...mapActions(useAppStore, ['getAllJobs'])
  },
  created(){
    this.getAllJobs()
  }
}
</script>

<template>
  <div id="hiring">
    <div class="hiring-title">We're Hiring</div>
    <div class="hiring-parent-job">
      <JobButton v-for="job in jobList" :key="job.id" :jobContent="job"/>
    </div>
  </div>
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

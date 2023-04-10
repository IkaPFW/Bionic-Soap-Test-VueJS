import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    jobList: [],
    jobById: {}
  }),
  getters: {},
  actions: {
    async getAllJobs(){
      try {
        const jobDatas = await axios.get('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth')
        
        this.jobList = jobDatas.data
      } catch (error) {
        console.log(error)
      }
    },
    async getJobById(id){
      try {
        const jobDetail = await axios.get(`https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth/${id}`)

        this.jobById = jobDetail.data
      } catch (error) {
        console.log(error)
      }
    },
    async postJobApplication(form){
      try {
        const { data } = await axios.post('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth', form)

        return data
      } catch (error) {
        console.log(error)
      }
    }
  }
})

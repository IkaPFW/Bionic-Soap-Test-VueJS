<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import SkillBulletPoint from '../components/SkillBulletPoint.vue';

export default {
  data(){
    return{
      postForm: {
        displayName: '',
        subject: jobById.title,
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  components: {
    SkillBulletPoint
  },
  computed: {
    ...mapState(useAppStore, ['jobById'])
  },
  methods: {
    ...mapActions(useAppStore, ['getJobById', 'postJobApplication']),
    handleJobApplication(form){
      this.postJobApplication(form)
    }
  },
  created(){
    this.getJobById(this.$route.params.id)
  }
}
</script>

<template>
  <div id="job-content">
        <header class="job-content-header">
            <h5 class="job-content-title"></h5>
            <button type="button" class="close">Back</button>
        </header>
        <div class="job-content-body">
            <div class="job-content-join">
                <div>
                    <div>
                        <div>
                            <p class="job-title">
                                {{jobById.title}}
                            </p>
                        </div>
                        <div>
                            <div class="job-description">
                                {{ jobById.description.txt }}
                                <h5>
                                    <strong>Skill:</strong>
                                </h5>
                                <ul>
                                    <SkillBulletPoint v-for="skill in jobById.ptJobSkills" :key="skill.id" :skill="skill.name"/>
                                </ul>
                            </div>
                        </div>
                        <div class="job-apply-title pt-4 pb-3">Send Your Job Application</div>
                        <div class="job-apply-parent">
                            <div class="job-apply-child">
                                <label for="YourName" class="job-apply-label">Your Name</label>
                                <input v-model="postForm.displayName" type="text" id="YourName" placeholder="Enter your name" class="form-control input-outline"/>
                            </div>
                            <div class="job-apply-child">
                                <label for="MobileNumber" class="job-apply-label">Mobile Number</label>
                                <input v-model="postForm.phone" type="text" id="MobileNumber" placeholder="Enter your mobile number" class="form-control input-outline"/>
                            </div>
                            <div class="job-apply-child">
                                <label for="EmailAddress" class="job-apply-label">Email Address</label>
                                <input v-model="postForm.email" type="text" id="EmailAddress" placeholder="Enter your email" class="form-control input-outline"/>
                            </div>
                            <div class="job-apply-child">
                                <label for="WriteMessage" class="job-apply-label">Write your message here...</label>
                                <textarea v-model="postForm.message" type="text" form="WriteMessage" placeholder="Write your message" rows="1" class="form-control input-outline" style="resize: none;"></textarea>
                            </div>
                            <div class="job-apply-child">
                                <label for="file" class="job-apply-label">File</label>
                                <div class="job-apply-file-image">
                                    <div class="p-1">
                                        <button class="job-apply-file-image-btn">
                                            Upload file
                                        </button>
                                    </div>
                                    <div>
                                        <input hidden="hidden" type="file" id="file_photo" data-cy="att" multiple="multiple" accept="image/*,.pdf,.doc,.docx"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-3">
                            <button @submit.prevent="handleJobApplication(postForm)" type="submit" id="save-entity" class="btn btn-sm job-apply-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

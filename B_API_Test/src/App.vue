<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
import JobDetailView from './views/JobDetailView.vue';

export default {
  components: {
    HomeView,
    JobDetailView
  }
}
</script>

<template>
  <router-view></router-view>
</template>

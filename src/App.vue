<template>
  <v-app>
    <nav-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from '@/components/TopNav'
export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

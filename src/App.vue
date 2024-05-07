<template>
  <v-app class="light">
    <Header class="header position-absolute w-100" />
    <router-view/>
  </v-app>
</template>

<script>
import Header from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
}
</script>

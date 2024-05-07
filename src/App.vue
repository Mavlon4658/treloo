<template>
  <v-app class="light">
    <Header class="header position-absolute w-100" />
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
}
</script>

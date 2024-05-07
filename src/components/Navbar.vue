<template>
  <nav>
    <main-container>
      <v-toolbar flat app class="text-white py-6">
        <v-toolbar-title>
          <router-link to="/" class="font-weight-medium header__logo">Treloo</router-link>
        </v-toolbar-title>
        <v-space></v-space>
        <ul class="nav d-flex align-center">
          <li v-for="nav in navs" :key="nav">
            <router-link class="nav__item" :to="nav.path">{{ nav.title }}</router-link>
          </li>
        </ul>
        <v-btn class="header__btn" color="white" variant="flat">Blog</v-btn>
      </v-toolbar>
    </main-container>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',

  data () {
    return {
      navs: [
        {title: 'Review', path: ''},
        {title: 'Tips', path: ''},
        {title: 'Alerts', path: ''},
        {title: 'Blog', path: ''},
      ]
    }
  },
}
</script>

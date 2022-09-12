<template>
  <v-app>
    <!--[if lte IE 9]>
    <p class="browserupgrade">
    You are using an <strong>outdated</strong> browser. Please
    <a href="https://browsehappy.com/">upgrade your browser</a> to improve
    your experience and security.
    </p>
    <![endif]-->
    <!-- Upper navigation bar with language selector -->
    <upper-bar />
    <!-- Lower navigation bar with user navigation -->
    <lower-bar @toggleDrawer="toggleDrawer" class="hidden-sm-and-down" />
    <!-- Drawer for mobile devices -->
    <mobile-bar @toggleDrawer="toggleDrawer" class="hidden-md-and-up" />
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-action tile>
            <v-img
              style="height:45px;width:45px;"
              :src="require('@/assets/img/index.jpg')"
              alt="logo"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ $t('title') }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ $t('zone') }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider style="color: #37474f" />
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-blue--text text--accent-4"
        >
          <v-list-item nuxt :to="{ path: localePath(menu.path)}" v-for="(menu,i) in sidebar" :key="i">
            <v-list-item-icon>
              <v-icon>mdi-{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t(menu.i18n) }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
      <!-- Messages and cookie -->
      <snakbar-message />
      <client-only>
        <cookie-message />
      </client-only>
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import UpperBar from "@/components/navigation/UpperBar";
import LowerBar from "@/components/navigation/LowerBar";
import MobileBar from "@/components/navigation/MobileBar";
import FooterBar from "@/components/navigation/FooterBar";
import SnakbarMessage from "@/components/common/SnakbarMessage";
import CookieMessage from "@/components/common/Cookie";
export default {
  components: { CookieMessage, SnakbarMessage, FooterBar, MobileBar, LowerBar, UpperBar },
  data () {
    return {
      drawer: false,
      group: null,
      sidebar: [
        { icon: 'home', i18n: 'menu.home', path: '/'},
        { icon: 'account-group', i18n: 'menu.about', path: '/about'},
        { icon: 'shield-alert-outline', i18n: 'menu.activity', path: '/activity'},
        { icon: 'office-building', i18n: 'menu.headquarters', path: '/headquarters'},
        { icon: 'account-group', i18n: 'menu.volunteer', path: '/volunteer'},
        { icon: 'car-settings', i18n: 'menu.vehicles', path: '/vehicle'},
      ]
    }
  },
  head: {
    titleTemplate: '%s - ProCiv Settimo M.se'
  },
  beforeMount() {
    const token = this.$auth.$storage.getCookie('access_token')
    const user = this.$auth.$storage.getCookie('user')
    if(token && user) {
      // Set $auth props
      this.$auth.setStrategy('local')
      this.$auth.setUserToken(token)
      this.$auth.setUser(user)
      // Set axios token
      this.$axios.setToken(token, 'Bearer')
      console.log('auth done!')
    } else {
      this.$auth.logout()
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn
    }
  }
}
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}
.navbar-item svg {
  max-height: 2.2rem;
  width: auto;
}
.navbar-item {
  color: #ffffff;
}

</style>

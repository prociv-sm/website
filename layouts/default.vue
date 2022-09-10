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
              :src="require('~/assets/img/index.jpg')"
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('menu.home') }}</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/purpose">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('menu.about') }}</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/activity">
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('menu.activity') }}</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/vehicle">
            <v-list-item-icon>
              <v-icon>mdi-car-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('menu.vehicles') }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import UpperBar from "@/components/navigation/UpperBar";
import LowerBar from "@/components/navigation/LowerBar";
import MobileBar from "@/components/navigation/MobileBar";
import FooterBar from "@/components/navigation/FooterBar";
export default {
  components: { FooterBar, MobileBar, LowerBar, UpperBar },
  data () {
    return {
      drawer: false,
      group: null
    }
  },
  head: {
    titleTemplate: '%s - ProCiv Settimo M.se'
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
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

<template>
  <div>
    <v-app-bar color="#0066cc">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <v-app-bar-nav-icon class='hidden-md-and-up' @click="toggleDrawer()" style="color: white; font-size: larger"></v-app-bar-nav-icon>
        <v-app-bar-title style="color: white; font-weight: bold; line-height: 1.2;">
          <v-row class="hidden-sm-and-down">
            <v-col cols="3" style="padding-right: 0 !important;">
              <v-img
                style="height:45px;width:45px;"
                :src="require('@/assets/img/logo_white.svg')"
                alt="logo"
              />
            </v-col>
            <v-col cols="9" style="font-size: xx-large; overflow: visible !important; padding-left: 0 !important;">
              {{ $t('title') }}
            </v-col>
          </v-row>
          <span class="hidden-md-and-up justify-start"  style="font-size: xx-large; overflow: visible !important;">
              {{ $t('title') }}
            </span>
        </v-app-bar-title>
        <v-spacer />
        <!-- Access admin section -->
        <user-menu v-if="isLoggedIn" />
        <v-btn v-else icon nuxt to="/auth/login">
          <v-icon color="#ffffff">mdi-login</v-icon>
        </v-btn>
      </v-container>
      <template v-slot:extension>
        <v-container class="py-0 px-0 px-sm-2">
          <v-btn text color="#ffffff" nuxt :to="{ path: localePath('/')}">{{ $t('menu.home') }}</v-btn>
          <v-btn text color="#ffffff" nuxt :to="{ path: localePath('/about')}">{{ $t('menu.about') }}</v-btn>
          <v-btn text color="#ffffff" nuxt :to="{ path: localePath('/operations')}">{{ $t('menu.activity') }}</v-btn>
          <v-btn text color="#ffffff" nuxt :to="{ path: localePath('/headquarter')}">{{ $t('menu.headquarters') }}</v-btn>
          <v-btn text color="#ffffff" nuxt :to="{ path: localePath('/volunteer')}">{{ $t('menu.volunteer') }}</v-btn>
          <v-btn text color="#ffffff" nuxt :to="{ path: localePath('/vehicle')}">{{ $t('menu.vehicles') }}</v-btn>
        </v-container>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import UserMenu from "@/components/navigation/UserMenu";
export default {
  name: "LowerBar",
  components: { UserMenu },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.$emit("toggleDrawer", !this.drawer);
    }
  },
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn
    }
  }
};
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

<template>
  <div>
    <v-toolbar clipped-left dark color="primary">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link
          class="navbar-item"
          to="/"
          title="Vai alla pagina principale"
        >
          <span class="hidden-md-and-up white--text">
            ProCiv Settimo Milanese
          </span>
          <v-img
            class="hidden-sm-and-down"
            style="height:52px;width:52px;"
            :src="require('~/assets/img/index.jpg')"
            alt="logo"
          />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-for="(nav, i) in navigation">
        <v-toolbar-items :key="i" class="hidden-sm-and-down" :title="nav.desc">
          <v-btn :disabled="nav.disabled" flat nuxt :to="nav.link">
            {{ nav.title }}
          </v-btn>
        </v-toolbar-items>
      </template>
    </v-toolbar>

    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      temporary
      absolute
      width="200"
    >
      <v-list>
        <v-list-tile
          v-for="(nav, i) in navigation"
          :key="i"
          nuxt
          :to="nav.link"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Protezione Civile Settimo Mil.se",
      drawer: null,
      navigation: [
        {
          title: "Home",
          link: "/",
          desc: "",
          disabled: false
        },
        {
          title: "Attività",
          link: "/activity",
          desc: "Le attività del dipartimento",
          disabled: false
        },
        {
          title: "Scopo",
          link: "/purpose",
          desc: "Cosa fa la protezione civile in italia",
          disabled: false
        },
        {
          title: "Parco mezzi",
          link: "/vehicle",
          desc: "I nostri mezzi",
          disabled: false
        },
        {
          title: "Attrezzatura",
          link: "/tools",
          desc: "La nostra mezzi",
          disabled: true
        },
        {
          title: "Contatti",
          link: "/contact",
          desc: "Contattaci!",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style type="text/scss" scoped>
a.navbar-item {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>

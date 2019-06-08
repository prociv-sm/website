<template>
  <v-toolbar dark color="#033162">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text" nuxt to="/">
      <nuxt-link class="navbar-item" to="/" title="Vai alla pagina principale">
        {{ title }}
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-for="(nav, i) in navigation">
      <v-toolbar-items :key="i" class="hidden-sm-and-down" :title="nav.desc">
        <v-btn flat nuxt :to="nav.link">{{ nav.title }}</v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: "Protezione Civile Settimo Mil.se",
      navigation: [
        {
          title: "Attività",
          link: "/activity",
          desc: "Le attività del dipartimento"
        },
        {
          title: "Scopo",
          link: "/purpose",
          desc: "Cosa fa la protezione civile in italia"
        },
        {
          title: "Parco mezzi",
          link: "/vehicle",
          desc: "I nostri mezzi"
        },
        {
          title: "Attrezzatura",
          link: "/tools",
          desc: "La nostra mezzi"
        },
        {
          title: "Contatti",
          link: "/contact",
          desc: "Contattaci!"
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

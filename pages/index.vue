<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-alert type="info" value="true">
          Questo sito è attualmente in sviluppo, le informazioni riportate
          potrebbero non essere corrette!
          <fa-icon class="mr-1" :icon="['fab', 'font-awesome']" />
        </v-alert>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">
                Le attività della Protezione Civile sul territorio
              </div>
              <span>
                Attualmente il sito è in sviluppo, torna in seguito per vedere
                le modifiche!
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Home",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://nuxtjs.org" },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  }
};
</script>

<style scoped>
.headline {
  padding-bottom: 2%;
}
.info {
  background-color: #2196f3 !important;
}
</style>

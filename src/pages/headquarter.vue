<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.headquarters" title='Base operatica' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <v-row dense>
          <v-col cols="12" md="6" lg="6">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/hq.png')"
                max-height="300"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <v-card>
              <v-card-text>
                <div class="text-center">
                  <v-icon size="40" color="#0066cc">mdi-map-marker</v-icon>
                  <br>
                  <h2 class="mb-2">Indirizzo</h2>
                  <a
                    href="https://www.google.it/maps/place/Protezione+civile+-+Settimo+Milanese/@45.4704258,9.0672919,21z/data=!4m5!3m4!1s0x4786eb01ea1341e1:0xdb5a715389ef2a3f!8m2!3d45.470496!4d9.0673872"
                    target="_blank"
                    style="font-size: 125%"
                    class="mb-1 mt-1"
                  >
                    Via Ippolito Nievo, 1, 20019 Settimo Milanese MI
                  </a>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="mt-2">
              <v-card-text>
                <div class="text-center">
                  <h2>Contatti utili</h2>
                  <v-list outlined rounded class="mt-2">
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title><a style="color: red">112</a></v-list-item-title>
                        <v-list-item-subtitle>Numero per le emergenze</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title><a href="tel:+393293817148">393293817148</a></v-list-item-title>
                        <v-list-item-subtitle>Numero per informazioni o non emergenze</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-at</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title><a href="mailto:prociv@comune.settimomilanese.it">prociv@comune.settimomilanese.it</a></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
export default {
  name: "headquarter",
  components: { PageTitle },
  data() {
    return {
      loading: false
    }
  },
  head: {
    title: "Sede",
    meta: [
      // Open Graph
      { name: "og:title", content: "Sede" },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://procivsettimomi.it" },
      { name: "og:image", content: "/assets/img/activity.jpg" },
    ]
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

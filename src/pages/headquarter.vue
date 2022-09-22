<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="headquarters.title" title='Base operatica' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <v-row dense>
          <v-col cols="12" md="6" lg="6">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/hq.webp')"
                max-height="300"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <v-card>
              <v-card-title>
                <h3 class="headline mb-0">
                  <v-icon size="30" color="#0066cc">mdi-map-marker</v-icon>
                  {{ $t('headquarters.address') }}
                </h3>
              </v-card-title>
              <v-card-text>
                <div class="text-center">
                  <v-list outlined rounded>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-map-search</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <a
                                href="https://www.google.it/maps/place/Protezione+civile+-+Settimo+Milanese/@45.4704258,9.0672919,21z/data=!4m5!3m4!1s0x4786eb01ea1341e1:0xdb5a715389ef2a3f!8m2!3d45.470496!4d9.0673872"
                                target="_blank"
                                class="mb-1 mt-1"
                                v-on="on"
                              >
                                Via Ippolito Nievo, 1, 20019 Settimo Milanese MI
                              </a>
                            </template>
                            <span>{{ $t('headquarters.maps') }}</span>
                          </v-tooltip>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="mt-2">
              <v-card-title>
                <h3 class="headline mb-0">
                  <v-icon size="30" color="#0066cc">mdi-account-box-outline</v-icon>
                  {{ $t('headquarters.contacts') }}
                </h3>
              </v-card-title>
              <v-card-text>
                <div class="text-center">
                  <v-list outlined rounded>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title><a style="color: red">112</a></v-list-item-title>
                        <v-list-item-subtitle>{{ $t('headquarters.emergency.description') }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <a href="tel:+393293817148" v-on="on">393293817148</a>
                            </template>
                            <span>{{ $t('headquarters.phone.call') }}</span>
                          </v-tooltip>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ $t('headquarters.phone.description') }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon>mdi-at</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <a href="mailto:prociv@comune.settimomilanese.it" v-on="on">prociv@comune.settimomilanese.it</a>
                            </template>
                            <span>{{ $t('headquarters.sendMail') }}</span>
                          </v-tooltip>
                        </v-list-item-title>
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
      { name: "og:image", content: "/assets/img/lazy.webp" },
    ]
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.volunteer" title='Volontari' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <v-row dense>
          <v-col cols="12" md="12">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/volunteers/groups.webp')"
                max-height="250"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card>
              <v-card-text>
                Attualmente il gruppo conta <strong>37</strong> volontari attivi, suddivisi in <strong>5 squadre</strong> in rotazione serale. <br>
                Le squadre effettuano un turno serale settimanale, in orario <strong>tra le 21:00 e le 23:00</strong>, dove vengono effettuate attività di addestramento, simulazioni, formazione teorica e attività di prevenzione sul territorio. <br>
                Ogni squadra è seguita da <strong>due capi turno o referenti</strong> che si occupano di coordinare le attività e di assicurare il funzionamento del gruppo. <br>
                Tutti i volontari possono partecipare a <strong>corsi di formazione e addestramento regionali o locali</strong>, per migliorare le proprie competenze ed ottenere abilitazioni per operazioni specialistiche. <br>
                La partecipazione alle <strong>attività in emergenze e alle attività extra turnazione viene coordinata tramite gruppi interni</strong> di allerta ed in base alle disponibilità e alla formazione specialistica necessaria per l'attivazione. <br>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-alert
              border="left"
              colored-border
              icon="mdi-help-circle-outline"
              prominent
              type="info"
            >
              <h3 class="text-h5">
                Vuoi unirti al nostro gruppo?
              </h3>
              <v-row
                align="center"
                no-gutters
              >
                <v-col class="grow">
                  Contattaci via mail <a href="mailto:prociv@comune.settimomilanese.it">prociv@comune.settimomilanese.it</a> o chiama il <a href="tel:+393293817148">393293817148</a>
                </v-col>
              </v-row>
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
export default {
  name: "volunteer",
  components: { PageTitle },
  head: {
    title: "Volontari",
    meta: [
      // Open Graph
      { name: "og:title", content: "Volontari" },
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

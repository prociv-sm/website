<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.alerts" title='Allerte' class="mb-2" />
      <!-- Allerte list -->
      <div class="flex-grow-1 min-w-0">
        <v-row dense>
          <v-col cols="12" md="12">
            <v-card>
              <v-card-title>
                 Le fasi operative
              </v-card-title>
              <v-card-text>
                Quando c'è un'allerta, Regioni e comuni valutano, in base alla propria organizzazione e al proprio territorio, quale fase operativa del piano di Protezione Civile attivare:
                <strong>ATTENZIONE</strong>, <strong>PRE-ALLARME</strong>, <strong>ALLARME</strong>. In caso di allerta rossa sul territorio, si attiva almeno la fase di pre-allarme.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>
                    <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                    ATTENZIONE
                  </v-card-title>
                  <v-divider />
                  <v-card-subtitle>
                    Il comune si prepara a rispondere all'eventuale emergenza attivando risorse e prodecure
                  </v-card-subtitle>
                  <v-card-text>
                    <p class="center-text"><strong>VERIFICA</strong></p>
                    <p>la prontezza operativa della propria struttura in contatto con Regione e Prefettura. <br>
                      Verifica le reperibilità del personale e dei volontari</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>
                    <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                    PRE-ALLARME
                  </v-card-title>
                  <v-divider />
                  <v-card-subtitle>
                    Il comune si mobilita per prevenire o ridurre i possibili danni a persone, animali e cose
                  </v-card-subtitle>
                  <v-card-text>
                    <p class="center-text"><strong>ATTIVA</strong></p>
                    <p>il Centro Operativo Comunale per coordinbare gli interventi <br>
                    il personale e i volontari iniziano le attività di monitoraggio di sottopassi, argini, ponti,...</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>
                    <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                    ALLARME
                  </v-card-title>
                  <v-divider />
                  <v-card-subtitle>
                    Il comune pienamente operativo per fronteggiare effetti e danni previsti o in atto
                  </v-card-subtitle>
                  <v-card-text>
                    <p class="center-text"><strong>COORDINA</strong></p>
                    <p>tutte le attività di assistenza e soccorso alla popolazione <br>
                    l'evacuazione delle aree a rischio e il soccorso ai cittadini in difficoltà</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="12">
            <v-card>
              <v-card-title>
                I colori delle allerte
              </v-card-title>
              <v-card-text>
                <p>Il dipartimento di protezione civile invia bollettini giornalieri codificando lo stato delle zone tramite codici colori, verde, giallo, arancione e rosso. In base al colore assegnato il territorio dovrà attivare le risorse opportune per verificare, mitigare ed eventualmente gestire l'emergenza in arrivo. Più l'allerta è importante, peggiori sono i possibili danni previsti </p>
                <v-row dense>
                  <v-col cols="12" md="4">
                    <v-card color="yellow" outlined>
                      <v-card-title>
                        <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                        Giallo
                      </v-card-title>
                      <v-divider />
                      <v-card-text>
                        <p>Il territorio è soggetto a condizioni meteorologiche avverse, ma non è previsto alcun fenomeno particolarmente pericoloso</p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-card color="orange" outlined>
                      <v-card-title>
                        <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                        Arancione
                      </v-card-title>
                      <v-divider />
                      <v-card-text>
                        <p>Il territorio è soggetto a condizioni meteorologiche avverse, ma non è previsto alcun fenomeno particolarmente pericoloso</p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-card color="red" outlined rounded>
                      <v-card-title>
                        <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                        Rosso
                      </v-card-title>
                      <v-divider />
                      <v-card-text>
                        <p>Il territorio è soggetto a condizioni meteorologiche avverse, ma non è previsto alcun fenomeno particolarmente pericoloso</p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
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
  head: {
    title: "Allerte",
    meta: [
      // Open Graph
      { name: "og:title", content: "Allerte" },
      { name: "og:description", content: "Le allerte sul territorio di Settimo Milanese" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://procivsettimomi.it" },
      { name: "og:image", content: "/images/snow.jpg" },
    ]
  },
  components: {
    PageTitle
  },
  data() {
    return {
      activities: [],
      loading: true,
      page: 1,
      itemsPerPage: 24
    };
  }
};
</script>

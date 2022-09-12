<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="about.title" title='Le attività della Protezione Civile' class="mb-2" />
      <!-- About list -->
      <div class="flex-grow-1 min-w-0">
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                <span class="text-justify">
                  <strong>La gestione dell’emergenza rientra da sempre tra le funzioni principali del Dipartimento della Protezione Civile.</strong> È infatti compito del Dipartimento coordinare gli interventi e le misure necessarie a fronteggiare calamità naturali o eventi che, per intensità ed estensione, devono essere affrontati con mezzi e poteri straordinari.
                  Solo una mobilitazione tempestiva, integrata e coordinata di tutte le risorse nazionali può infatti assicurare la tutela della vita, dei beni, degli insediamenti e dell’ambiente. <br>
                  Il Dipartimento, tramite le sue sedi capillari sul territorio effettua attività di Previsione, prevenzione, gestione e superamento dell'emergenza. <br>
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/emergency/snow.jpg')"
                max-height="180"
              ></v-img>
              <v-card-title>
                <h3 class="text-h5">
                  Antigelo e neve
                </h3>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/emergency/emesanitaria-coronavirus.jpg')"
                max-height="180"
              ></v-img>
              <v-card-title>
                <h3 class="text-h5">
                  Emergenze sanitarie
                </h3>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/emergency/sara-vibo-img-3275.jpg')"
                max-height="180"
              ></v-img>
              <v-card-title>
                <h3 class="text-h5">
                  Meteo-Idro
                </h3>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/emergency/pms9755.jpg')"
                max-height="180"
              ></v-img>
              <v-card-title>
                <h3 class="text-h5">
                  Calamità naturali
                </h3>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/emergency/volontariato-dsc-0074-1.jpg')"
                max-height="180"
              ></v-img>
              <v-card-title>
                <h3 class="text-h5">
                  Antincendio forestale
                </h3>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-img
                :lazy-src="require('@/assets/img/lazy.webp')"
                :src="require('@/assets/img/emergency/976279_705075359515236_2086908150_o.jpg')"
                max-height="180"
              ></v-img>
              <v-card-title>
                <h3 class="text-h5">
                  Logistica
                </h3>
              </v-card-title>
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
  components: { PageTitle },
  head: {
    title: "Attività",
    meta: [
      // Open Graph
      { name: "og:title", content: "Lo scopo del dipartimento" },
      {
        name: "og:description",
        content:
          "Il soccorso alla popolazione in emergenza è l’attività che identifica la funzione principale della protezione civile, anche se negli anni le competenze del sistema si sono estese allo sviluppo della conoscenza dei rischi e alle azioni per evitare o ridurre al minimo i danni delle calamità."
      },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it/about"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  }
};
</script>

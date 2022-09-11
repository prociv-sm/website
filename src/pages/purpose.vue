<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="about.title" title='Le attività della Protezione Civile' class="mb-2" />
      <!-- About list -->
      <div class="flex-grow-1 min-w-0">
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-img
                :src="require('@/assets/img/activity.jpg')"
                aspect-ratio="2.75"
              ></v-img>
              <v-card-text>
              <span class="text-justify">
                Il soccorso alla popolazione in emergenza è l’attività che
                identifica la funzione principale della protezione civile,
                anche se negli anni le competenze del sistema si sono estese
                allo sviluppo della conoscenza dei rischi e alle azioni per
                evitare o ridurre al minimo i danni delle calamità. <br>
              </span>
                <span class="text-justify">
                Il Decreto Legislativo n.1 del 2 gennaio 2018 ridefinisce le
                attività di protezione civile individuate per la prima volta
                dalla legge istitutiva del Servizio Nazionale 225/1992:
                previsione, prevenzione e mitigazione dei rischi, gestione
                delle emergenze e loro superamento. Alle attività di
                protezione civile concorrono diverse amministrazioni e
                istituzioni, pubbliche e private, che la legge individua quali
                componenti e strutture operative del Servizio Nazionale. <br>
              </span>
                <span class="text-justify pt-2">
                <b>In ordinario.</b> Le componenti e strutture operative del
                Servizio Nazionale sono impegnate, per i diversi ambiti di
                competenza e responsabilità, in attività di previsione e nella
                programmazione di azioni di prevenzione e mitigazione del
                rischio. In questo processo è centrale il coinvolgimento della
                comunità tecnico-scientifica, attraverso la rete dei Centri
                funzionali - che realizzano quotidianamente, a livello
                centrale e regionale, attività di previsione, monitoraggio,
                sorveglianza e allertamento - e dei Centri di competenza,
                strutture che svolgono ricerca o forniscono servizi di natura
                tecnico-scientifica per finalità di protezione civile. Comuni,
                province e prefetture si dedicano inoltre all’aggiornamento
                dei piani di emergenza, strumenti indispensabili di
                prevenzione, sulla base delle linee guida e agli indirizzi
                regionali e nazionali. Anche il singolo cittadino, in quanto
                componente del Servizio Nazionale, ha un ruolo di primo piano
                nelle attività di prevenzione dei rischi. Obiettivo delle
                attività ordinarie di diffusione della conoscenza di
                protezione civile e di sensibilizzazione della popolazione è
                proprio formare un cittadino più consapevole e preparato.<br>
              </span>
                <span class="text-justify pt-2">
                <b>In emergenza.</b>
                Quando un evento colpisce un territorio, il Sindaco - Autorità
                di protezione civile nell’ambito del Servizio Nazionale - ha
                il compito di assicurare i primi soccorsi alla popolazione,
                coordinando le strutture operative locali sulla base del piani
                comunali di emergenza (evento di tipo “a”). Se i mezzi e le
                risorse a disposizione del Comune non sono sufficienti a
                fronteggiare l’emergenza, intervengono la Provincia, la
                Prefettura - Uffici territoriale del governo, e la Regione,
                che attivano le risorse disponibili sui territori di propria
                competenza (evento di tipo “b”). Nelle situazioni più gravi,
                su richiesta del Governo regionale, subentra il livello
                nazionale, con la dichiarazione dello stato di emergenza
                (evento di tipo “c”): il coordinamento degli interventi viene
                assunto direttamente dal Presidente del Consiglio dei
                Ministri, che opera attraverso il Dipartimento della
                Protezione Civile. È in questi casi che il Servizio Nazionale
                viene impegnato in tutte le sue componenti e strutture
                operative.
              </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-row dense>
              <v-col cols="6">
                <v-card>
                  <v-card-title primary-title>
                    Previsione
                  </v-card-title>
                  <v-card-text>
                  <span>
                      L'attività di previsione punta a identificare gli scenari di
                      rischio e, quando possibile, a preannunciare, monitorare,
                      sorvegliare e a vigilare in tempo reale gli eventi e i livelli
                      di rischio attesi.
                    </span>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  <v-card-title primary-title>
                    Prevenzione
                  </v-card-title>
                  <v-card-text>
                  <span>
                L'attività di prevenzione punta a evitare, o ridurre al minimo,
                i danni in caso di calamità. Gli strumenti principali:
                l'allertamento, la pianificazione, la formazione, la diffusione
                della conoscenze e l'informazione alla popolazione.
              </span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
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
    title: "Lo scopo del dipartimento",
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
        content: "https://protezionecivile-settimomilanese.it/purpose"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  }
};
</script>

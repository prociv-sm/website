<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-img
            :src="require('~/assets/img/activity.jpg')"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <div class="headline">
                Le attività della Protezione Civile sul territorio
              </div>
              <span>
                <p>
                  Il soccorso alla popolazione in emergenza è l’attività che
                  identifica la funzione principale della protezione civile,
                  anche se negli anni le competenze del sistema si sono estese
                  allo sviluppo della conoscenza dei rischi e alle azioni per
                  evitare o ridurre al minimo i danni delle calamità.
                </p>
                <p>
                  Il Decreto Legislativo n.1 del 2 gennaio 2018 ridefinisce le
                  attività di protezione civile individuate per la prima volta
                  dalla legge istitutiva del Servizio Nazionale 225/1992:
                  previsione, prevenzione e mitigazione dei rischi, gestione
                  delle emergenze e loro superamento. Alle attività di
                  protezione civile concorrono diverse amministrazioni e
                  istituzioni, pubbliche e private, che la legge individua quali
                  componenti e strutture operative del Servizio Nazionale.
                </p>
                <p>
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
                  proprio formare un cittadino più consapevole e preparato.
                </p>
                <p>
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
                </p>
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Previsione</div>
              <span>
                L'attività di previsione punta a identificare gli scenari di
                rischio e, quando possibile, a preannunciare, monitorare,
                sorvegliare e a vigilare in tempo reale gli eventi e i livelli
                di rischio attesi.
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Prevenzione</div>
              <span>
                L'attività di prevenzione punta a evitare, o ridurre al minimo,
                i danni in caso di calamità. Gli strumenti principali:
                l'allertamento, la pianificazione, la formazione, la diffusione
                della conoscenze e l'informazione alla popolazione.
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

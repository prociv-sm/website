<template>
  <v-card style="color: black">
    <v-card-title class="headline">
      <v-icon size='40' class="mr-1" style="color:#d2932d">mdi-cookie</v-icon>  {{ $t('cookies.title') }}
    </v-card-title>
    <v-card-text>
      <p style="margin-bottom: 5px !important;" > {{ $t('cookies.description') }}</p>
      <v-checkbox
        v-model="tecnicalCookie"
        disabled
        label="Cookie operativi (Necessari al funzionamento del sito)"
      />
      <p style="margin-bottom: 5px !important;">I cookie operativi sono utilizzati per fornire i nostri servizi, in caso di rifiuto il sito non funzionerà correttamente.</p>
      <p style="margin-bottom: 5px !important;">Di seguito i cookie utilizzati nel sito:</p>
      <ul>
        <li><strong>GDPR:accepted</strong>: Utilizzato per salvare la tua preferenza sui cookie (Persiste 14 giorni)</li>
        <li><strong>access_token</strong>: Utilizzato per salvare il tuo token di accesso (Persiste 7 giorni, non presente se non autenticato)</li>
        <li><strong>user</strong>: Informazioni sull'utente connesso (Persiste 7 giorni, non presente se non autenticato)</li>
      </ul>
      <v-expansion-panels class='my-2'>
        <v-expansion-panel>
          <v-expansion-panel-header><strong>Ulteriori informazioni sui cookie operativi</strong></v-expansion-panel-header>
          <v-expansion-panel-content>
            <p style="margin-bottom: 5px !important;">I cookie tecnici sono utilizzati solitamente per le seguenti attività:</p>
            <ul>
              <li>Riconoscere il tuo accesso per usufruire dei nostri servizi</li>
              <li>Presentare contenuti rilevanti, fornire altri servizi e funzionalità personalizzati</li>
              <li>Prevenire attività fraudolente e migliorare la sicurezza</li>
              <li>Tenere traccia delle tue preferenze, come scelte relative alla privacy, lingua, impostazioni dei temi</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text @click="denyAll">
        {{ $t("cookies.deny") }}
      </v-btn>
      <v-btn style="color: white" color='primary' @click="acceptAll">
        {{ $t("cookies.accept") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CookiePreferenceModal',
  data: () => ({
    tecnicalCookie: true
  }),
  methods: {
    acceptAll () {
      this.$emit('acceptAll')
    },
    denyAll () {
      this.$emit('denyAll')
    }
  }
}
</script>

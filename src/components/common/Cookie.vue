<template>
  <v-snackbar
    bottom
    left
    :value="isOpen"
    :timeout="-1"
    multi-line
    vertical
    elevation="24"
  >
    <div class="d-flex">
      <v-icon size='85' class="mr-4" style="color:#d2932d">mdi-cookie</v-icon>
      <div>
        Element utilizza eslusivamente cookie tecnici indispensabili per l'autenticazione, non tracciamo le operazioni ne effettuiamo analitica. Per vedere nel dettaglio l'utilizzo ed i dati raccolti visualizza la
        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>. Per avere un'esperienza utente migliore è consigliato di autorizzarne l'uso.
      </div>
    </div>
    <template #action="{ attrs }">
      <v-btn v-bind="attrs" text @click="accept">Accetta</v-btn>
      <v-btn v-bind="attrs" text @click="deny">Rifiuta</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'CookieMessage',
  data () {
    return {
      isOpen: false
    }
  },
  created () {
    if (!localStorage.getItem('GDPR:accepted') || localStorage.getItem('GDPR:accepted') === 'false') {
      this.isOpen = true
      console.log(localStorage.getItem('GDPR:accepted'))
    }
  },
  methods: {
    accept () {
      this.isOpen = false
      localStorage.setItem('GDPR:accepted', 'true')
    },
    deny () {
      this.isOpen = false
      localStorage.setItem('GDPR:accepted', 'false')
    }
  }
}
</script>

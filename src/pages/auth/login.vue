<template>
  <div>
    <v-card class="text-center pa-1">
      <!-- Replace it with asset logo -->
      <v-card-title class="justify-center display-1" style="color: #0066cc">Protezione Civile</v-card-title>
      <v-card-subtitle style="color: #0066cc">Comune di Settimo Milanese</v-card-subtitle>
      <v-divider />
      <v-alert v-if="cookieActive" outlined type="info" icon="mdi-cookie" colored-border border="left" prominent>
        I cookie sono attualmente disattivati senza non è possibile accedere al sito. <a :href="localePath('/')">Torna alla home e attiva i cookie.</a>
      </v-alert>
      <v-card-title class="justify-center display-1 mb-1">{{ $t('auth.login.title') }}</v-card-title>
      <!-- sign in form -->
      <v-card-text>
        <v-alert
          v-if="firstAccess"
          border="left"
          colored-border
          dense
          type="success"
        >
          Sei registrato! Ora puoi effettuare il login.
        </v-alert>
        <v-alert
          v-if="passwordChanged"
          border="left"
          colored-border
          dense
          type="success"
        >
          Password cambiata! Accedi con la nuova password.
        </v-alert>
        <v-form ref="form" v-model="isFormValid" lazy-validation>
          <v-text-field
            v-model="username"
            :rules="[rules.required]"
            :validate-on-blur="false"
            :error="error"
            :label="$t('common.username') + ' *'"
            name="username"
            outlined
            dense
            aria-label="Inserisci il tuo username"
            :disabled="basicAuthEnabled || cookieActive"
            @keyup.enter="authenticate"
            @change="resetErrors"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            :error="error"
            :disabled="basicAuthEnabled || cookieActive"
            :error-messages="errorMessages"
            :label="$t('common.password') + ' *'"
            name="password"
            aria-label="Inserisci la tua password"
            outlined
            dense
            @change="resetErrors"
            @keyup.enter="authenticate"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-btn
            :loading="isLoading"
            :disabled="isSignInDisabled || basicAuthEnabled || (!username || !password)"
            block
            large
            color="primary"
            style="color: white"
            @click="authenticate"
          >
            {{ $t('auth.login.button') }}
          </v-btn>
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn nuxt :to="localePath('/')" text>
          <v-icon small left>mdi-arrow-left</v-icon>
          <span style="padding-left: 2px">{{ $t("common.back") }}</span>
        </v-btn>
        <v-spacer />
        <v-btn nuxt :to="localePath('/auth/password/forgot')" disabled text>
          <span style="padding-right: 2px">{{ $t('auth.login.forgot') }}</span>
          <v-icon small right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider />
      <div class="text-center mt-1">
        Developed by <a class="text-decoration-none" href="https://andreatombolato.dev/" target="_blank" style="color: #0066cc">Andrea Tombolato</a>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "login",
  layout: 'auth',
  data: () => ({
    // sign in buttons
    isLoading: false,
    isSignInDisabled: false,
    basicAuthEnabled: false,

    // form
    isFormValid: true,
    username: '',
    password: '',

    // form error
    error: false,
    errorMessages: '',

    // show password field
    showPassword: false,

    // input rules
    rules: {
      required: value => (value && Boolean(value)) || 'Il campo è obbligatorio'
    }
  }),
  head () {
    return {
      title: this.$i18n.t('auth.login.title'),
      meta: [
        // Open Graph
        { name: "og:title", content: "Accedi" },
        { name: "og:description", content: "Sito web della protezione civile di Settimo Milanese" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://procivsettimomi.it" },
        { name: "og:image", content: "/images/snow.jpg" },
      ]
    }
  },
  computed: {
    firstAccess () {
      return this.$route.query.first_login
    },
    passwordChanged () {
      return this.$route.query.password_changed
    },
    cookieActive() {
      return !this.$auth.$storage.getCookie('GDPR:accepted') || this.$auth.$storage.getCookie('GDPR:accepted') === "false"
    }
  },
  mounted () {
    if (this.$route.query.error) {
      this.$notifier.showMessage({ content: 'Errore durante l\'autenticazione!', type: 'error' })
    }
  },
  methods: {
    async authenticate () {
      this.isLoading = true
      this.isSignInDisabled = true
      if (this.$refs.form.validate()) {
        try {
          await this.$auth.loginWith('local', { data: { username: this.username, password: this.password } })
            .then((resp) => {
              // Clean cookies
              this.$auth.$storage.removeCookie('access_token')
              this.$auth.$storage.removeCookie('user')
              // Write new cookies
              this.$auth.$storage.setCookie('access_token', resp.data.access_token, {
                maxAge: 60 * 60 * 24 * 7 // 7 days
              })
              this.$auth.$storage.setCookie('user', resp.data.user, {
                maxAge: 60 * 60 * 24 * 7 // 7 days
              })
              // Set $auth props
              this.$auth.setUserToken(resp.data.access_token)
              this.$auth.setUser(resp.data.user)
              // Set axios token
              this.$axios.setToken(resp.data.access_token, 'Bearer')
            })
          await this.$router.push({ path: '/' })
        } catch (err) {
          this.isLoading = false
          this.isSignInDisabled = false
          this.$notifier.showMessage({ content: 'Accesso non riuscito!', type: 'error' })
          console.log(err)
        }
      }
    },
    resetErrors () {
      this.error = false
      this.errorMessages = ''
    }
  }
};
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}
</style>

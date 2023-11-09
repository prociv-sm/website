<template>
  <div>
    <v-card class="text-center pa-1">
      <!-- Replace it with asset logo -->
      <v-card-title class="justify-center display-1" style="color: #0066cc">{{ $t('title') }}</v-card-title>
      <v-card-subtitle style="color: #0066cc">{{ $t('zone') }}</v-card-subtitle>
      <v-divider />
      <v-card-title class="justify-center display-1 mb-1">
        Insert the code you received on the mobile authentication app
      </v-card-title>
      <!-- sign in form -->
      <v-card-text>
        <v-form ref="form" v-model="isFormValid" lazy-validation>
          <v-row dense>
            <v-col cols="12">
              <v-otp-input
                v-model="otp"
                :length="6"
              ></v-otp-input>
            </v-col>
          </v-row>
          <v-btn
            :loading="isLoading"
            :disabled="!otp"
            block
            large
            color="primary"
            style="color: white"
            class="mt-2"
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
    otp: '',

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

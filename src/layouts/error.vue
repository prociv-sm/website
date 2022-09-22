<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <v-card class="text-center w-full error-page pa-3">
        <v-img
          src="/images/aliens.svg"
          max-height="350"
          contain
        />
        <div class="display-2 mt-10">{{ $t('error.title') }}</div>
        <div class="mt-3 mb-10">{{ $t('error.description') }}</div>
        <v-btn nuxt :to="{ path: localePath('/')}" block large color="primary" style="color: white">
          {{ $t('common.back') }}
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'auth'
}
</script>

<style>
.error-page {
  max-width: 500px;
}
</style>

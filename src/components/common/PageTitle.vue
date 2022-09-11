<template>
  <div>
    <div class="d-flex align-center py-1">
      <div>
        <div class="display-1 font-weight-bold">{{ i18n ? $t(i18n) : title }}</div>
      </div>
      <slot name="button"></slot>
    </div>
    <v-divider class="mt-1" />
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    i18n: {
      type: String,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

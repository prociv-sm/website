<template>
  <v-snackbar
    v-model="show"
    :timeout="2500"
    :color="color"
    top
    elevation="14"
    transition="scroll-x-reverse-transition"
    absolute
    right
    style="color: white"
  >
    {{ message }}
    <template #action="{ attrs }">
      <v-btn
        v-bind="attrs"
        text
        style="color: white"
        @click="show = false"
      >
        Ok
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnakbarMessage',
  data () {
    return {
      show: false,
      message: '',
      type: ''
    }
  },
  computed: {
    color () {
      switch (this.type) {
        case 'success':
          return 'green darken-3'
        case 'warning':
          return 'orange darken-4'
        case 'info':
          return 'light-blue darken-4'
        default:
          return 'red darken-4'
      }
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.type = state.snackbar.type
        this.show = true
      }
    })
  }
}
</script>

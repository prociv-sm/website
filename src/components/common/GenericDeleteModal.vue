<template>
  <v-card>
    <v-card-title class="headline mb-1">
      {{ $t('common.modals.delete.title') }}
    </v-card-title>
    <v-card-text>
      <p>{{ $t('common.modals.delete.description', { n: text }) }}</p>
      <v-checkbox
        v-model="confirmed"
        dense
        hide-details
        :label="$t('common.modals.delete.confirm')"
        required
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text @click="closeModal">
        {{ $t('common.modals.delete.buttons.cancel') }}
      </v-btn>
      <v-btn
        color="primary"
        text
        :disabled="!confirmed"
        @click.stop.prevent="deleteEvent"
      >
        {{ $t('common.modals.delete.buttons.delete') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'GenericDeleteModal',
  props: {
    text: {
      type: String,
      required: true,
    },
    itemId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    confirmed: false,
  }),
  methods: {
    closeModal() {
      this.$emit('closeModal', false)
    },
    deleteEvent() {
      this.$emit('deleteEvent', {
        id: this.itemId,
      })
    },
  },
}
</script>

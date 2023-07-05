<template>
  <div class="actions">
    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn
          icon
          nuxt
          :to="localePath({ path: '/users/' + item.id })"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <span>{{ $t('users.edit') }}</span>
    </v-tooltip>
<!--    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn icon v-on="on" @click.stop="deleteUserModal = true">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <span>{{ $t('users.delete') }}</span>
    </v-tooltip>
    <v-dialog v-model="deleteUserModal" persistent max-width="600" dark>
      <generic-delete-modal
        :text="item.username"
        :itemId="item.id"
        @closeModal="deleteUserModal = false"
        @deleteEvent="deleteUser"
      />
    </v-dialog>-->
  </div>
</template>

<script>
export default {
  name: 'UsersActions',
  data: () => ({
    deleteUserModal: false,
  }),
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
  methods: {
    async deleteUser({ id }) {},
  },
}
</script>

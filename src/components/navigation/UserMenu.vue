<template>
  <v-menu offset-y left transition="slide-y-transition" close-delay='700'>
    <template #activator="{ on }">
      <v-btn icon class="elevation-2" v-on="on">
        <v-avatar
          size="35px"
          color="grey lighten-4"
          class="online"
        >
          <span class="text-h6">{{ user.name.slice(0,1).toUpperCase() }}{{ user.surname.slice(0,1).toUpperCase() }}</span>
        </v-avatar>
      </v-btn>
    </template>

    <!-- user menu list -->
    <v-card>
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar color="grey lighten-4">
            <span class="text-h6">{{ user.name.slice(0,1).toUpperCase() }}{{ user.surname.slice(0,1).toUpperCase() }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }} {{ user.surname }}</v-list-item-title>
            <v-list-item-subtitle>{{ $t('users.internal.' + user.internal) }}</v-list-item-subtitle>
         </v-list-item-content>
        </v-list-item>
        <v-divider />
        <!-- Intervention add -->
        <v-list-item class="my-1" nuxt :to="{ path: localePath('/operations/new')}" >
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('operations.add') }}</v-list-item-title>
        </v-list-item>
        <!-- user logout -->
        <v-list-item @click.prevent="logout">
          <v-list-item-icon>
            <v-icon>mdi-exit-run</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.logout') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "UserMenu",
  computed: {
    user () {
      return this.$auth.user
    }
  },
  methods: {
    async logout () {
      // Clean cookies
      this.$auth.$storage.removeCookie('access_token')
      this.$auth.$storage.removeCookie('user')
      // Execute logout
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.online {
  border: #41b883 solid 2px;
}
</style>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="users.list" title='Lista utenti' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <v-card>
          <v-data-table
            style="background-color: transparent"
            :headers="headers"
            :items="users"
            :footer-props="{
              showFirstLastPage: true,
              showCurrentPage: true,
              'items-per-page-options': [20, -1],
            }"
            :items-per-page="20"
          >
            <template v-slot:item.internal="{ item }">
              {{ $t('users.internal.' + item.internal) }}
            </template>
            <template v-slot:item.actions="{ item }">
              <users-actions :item="item" />
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
import UsersActions from "~/components/users/UserActions.vue";
export default {
  name: "AddOperation",
  components: { UsersActions, PageTitle },
  middleware: 'auth',
  head: {
    title: "Users",
    meta: [
      // Open Graph
      { name: "og:title", content: "Create operation" },
      { name: "og:description", content: "Sito web della protezione civile di Settimo Milanese" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://procivsettimomi.it" },
      { name: "og:image", content: "/images/snow.jpg" },
    ]
  },
  async created() {
    await this.fetchData();
  },
  data() {
    return {
      headers: [
        {
          text: this.$t('users.fields.username'),
          align: 'start',
          sortable: false,
          value: 'username',
        },
        { text: this.$t('users.fields.name'), value: 'name' },
        { text: this.$t('users.fields.surname'), value: 'surname' },
        { text: this.$t('users.fields.email'), value: 'email' },
        { text: this.$t('users.fields.role'), value: 'internal' }
/*        { text: this.$t('users.fields.actions'), value: 'actions', sortable: false },*/
      ],
      loading: true,
      users: []
    }
  },
  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    }
  },
  methods: {
    async fetchData() {
      this.$axios
        .get('/api/v1/users')
        .then(response => {
          this.users = response.data;
          this.loading = false;
        });
    },
  }
};
</script>

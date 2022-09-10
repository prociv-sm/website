<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.activity" title='Attività' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <template v-if="loading">
          <v-row>
            <v-col v-for="n in 12" :key="n" cols="12" md="4" lg="4" xl="4">
              <v-skeleton-loader class="mx-auto" type="image, list-item-avatar-three-line" />
            </v-col>
          </v-row>
        </template>
        {{ activities }}
      </div>
    </v-container>
  </div>
</template>

<script>
import Loader from "../components/Loader";
import axios from "axios";
import ActivityCard from "../components/activity/ActivityCard";
import PageTitle from "@/components/common/PageTitle";
export default {
  head: {
    title: "Attività",
    meta: [
      { name: "og:title", content: "Lista delle attività" },
      {
        name: "og:description",
        content:
          "La lista delle attività svolte dal gruppo di protezione civile"
      },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it/activity"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  components: {
    PageTitle,
    ActivityCard,
    Loader
  },
  data() {
    return {
      activities: [],
      loading: true,
      page: 1,
      itemsPerPage: 24
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      this.$axios
        .get('https://smprocivapp.firebaseio.com/activities.json?orderBy="eventDate"')
        .then(response => {
          this.activities = response.data;
          this.loading = false;
        });
    }
  }
};
</script>

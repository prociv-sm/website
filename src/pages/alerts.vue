<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="menu.alerts" title='Allerte' class="mb-2" />
      <!-- Allerte list -->
      <div class="flex-grow-1 min-w-0">
      </div>
    </v-container>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
export default {
  head: {
    title: "Allerte",
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
    PageTitle
  },
  data() {
    return {
      activities: [],
      loading: true,
      page: 1,
      itemsPerPage: 24
    };
  }
};
</script>

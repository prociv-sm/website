<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-1 text-uppercase">Attività</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <loader v-if="loading"></loader>
      <template v-else-if="!showMode & !loading">
        <v-flex v-for="(activity, i) in activities" :key="i" sm12 mb12 lg12>
          <v-card>
            <v-img
              height="130px"
              aspect-ratio="16/9"
              src="https://comune.settimomilanese.mi.it/wp-content/uploads/2018/02/comune1-300x225.jpg"
            >
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">
                  {{ activity.title }}
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn round small color="primary" @click="changeView()"
                >Dettagli</v-btn
              >
              <chips-bar
                :author="activity.author"
                :event-date="activity.eventDate"
                :event-time="activity.eventTime"
              >
              </chips-bar>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
      <template v-else>
        dettagli
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import ChipsBar from "../components/ChipsBar";
import Loader from "../components/Loader";
import axios from "axios";
export default {
  head: {
    title: "Attività",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://nuxtjs.org" },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  },
  components: {
    ChipsBar,
    Loader
  },
  data() {
    return {
      showMode: false,
      activities: [],
      loading: true
    };
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    changeView() {
      return (this.showMode = false);
    },
    async fetchData() {
      // https://smprocivapp.firebaseio.com/activities/0.json
      axios
        .get("https://smprocivapp.firebaseio.com/activities.json")
        .then(response => {
          this.activities = response.data;
          this.loading = false;
        });
    }
  }
};
</script>

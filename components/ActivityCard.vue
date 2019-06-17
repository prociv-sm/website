<template>
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
      <v-btn round small color="primary" @click="changeView()">Dettagli</v-btn>
      <chips-bar
        :author="activity.author"
        :event-date="activity.eventDate"
        :event-time="activity.eventTime"
      >
      </chips-bar>
    </v-card-actions>
  </v-card>
</template>

<script>
import ChipsBar from "./ChipsBar";
export default {
  components: {
    ChipsBar
  },
  props: {
    activity: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <v-card>
    <v-img height="130px" aspect-ratio="16/9" :src="getImages(activity.image)">
    </v-img>
    <v-card-title primary-title>
      <div class="headline" style="line-height: 10px !important;">
        {{ activity.title }}
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="info" @click="show = !show">Explore</v-btn>
      <v-spacer></v-spacer>
      <chips-bar
        :author="activity.author"
        :event-date="activity.eventDate"
        :event-time="activity.eventTime"
      >
      </chips-bar>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show" v-html="activity.description"> </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
import ChipsBar from "../ChipsBar";
export default {
  components: {
    ChipsBar
  },
  props: {
    activity: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      show: false,
      dialog: false
    };
  },
  methods: {
    getImages(image) {
      if (!image) {
        return "https://comune.settimomilanese.mi.it/wp-content/uploads/2018/02/comune1-300x225.jpg";
      } else {
        return image;
      }
    }
  }
};
</script>

<template>
  <v-card>
    <v-img height="130px" aspect-ratio="16/9" :src="getImages(activity.image)">
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          {{ activity.title }}
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{ activity.title }}
          </v-card-title>

          <v-card-text v-html="activity.description"> </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" flat @click="dialog = false">
              Chiudi
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn round small color="primary" @click.native.stop="dialog = true"
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

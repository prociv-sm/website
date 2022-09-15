<template>
  <v-card class="mb-2">
    <v-card-title primary-title>
      <div>
        <div
          class="headline"
        >
          Interventi recenti
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <template v-if="loading">
          <v-col v-for="(n, i) in 4" :key="i + 'bottom'" cols="12" md="12" lg="12" xl="12">
            <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line" />
          </v-col>
        </template>
        <v-col
          v-else
          v-for="activity in activities"
          :key="activity.id"
          cols="12"
          md="12"
          lg="12"
        >
          <activity-card :activity="activity" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ActivityCard from "@/components/activity/ActivityCard";
export default {
  components: { ActivityCard },
  props: {
    activities: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

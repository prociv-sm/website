<template>
  <v-card class="mb-2">
    <v-card-title primary-title>
      <div>
        <div
          class="headline"
        >
          Attività recenti
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-list outlined rounded>
        <template v-for="(activity, index) in activities">
          <v-list-item :key="index">
            <v-list-item-action>
              <v-icon color="gray" title="Intervento tecnico">mdi-hammer-wrench</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Tecnico - {{ activity.title }}</v-list-item-title>
              <v-list-item-subtitle>
                Attività del {{ activity.eventDate }} - Orari {{ activity.eventTime }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index > activities.length"></v-divider>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ActivityCard from "~/components/activity/ActivityCard";
export default {
  components: { ActivityCard },
  props: {
    activities: {
      type: Array,
      required: true
    }
  }
};
</script>

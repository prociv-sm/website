<template>
  <v-layout align-center justify-end>
    <v-chip v-if="author">
      <v-avatar>
        <fa-icon
          color="gray"
          :icon="['fa', 'user']"
          title="Autore dell'articolo"
        ></fa-icon>
      </v-avatar>
      {{ author }}
    </v-chip>
    <v-chip v-if="eventDate">
      <v-avatar>
        <fa-icon
          color="gray"
          :icon="['fa', 'calendar']"
          title="Data dell'attività"
        ></fa-icon>
      </v-avatar>
      {{ eventDate }}
    </v-chip>
    <v-chip v-if="eventTime">
      <v-avatar>
        <fa-icon
          color="gray"
          :icon="['fa', 'clock']"
          title="Ora dell'attività"
        ></fa-icon>
      </v-avatar>
      {{ eventTime }}
    </v-chip>
  </v-layout>
</template>

<script>
export default {
  props: {
    eventDate: {
      type: String,
      required: true
    },
    eventTime: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
};
</script>

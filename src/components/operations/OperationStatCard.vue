<template>
  <v-card :title="'Totale interventi di ' + $t('operations.type.' + activity.type)">
    <v-list-item>
      <v-list-item-action>
        <operation-type-icon :type="activity.type" />
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ $t('operations.type.' + activity.type) }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>
          <strong style="font-size: 135%">{{ activity.count }}</strong>
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-card>
</template>

<script>
import OperationTypeIcon from "@/components/operations/OperationTypeIcon";
export default {
  name: "OperationStatsCard",
  components: { OperationTypeIcon },
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>

</style>

<template>
  <v-card>
    <v-list-item>
      <v-list-item-action>
        <operation-type-icon :type="activity.type" />
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ activity.title }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ activity.startDate | formatDate('dd/MM/yyyy') }} - {{ activity.location }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>
          <strong>{{ $t('operations.type.' + activity.type) }}</strong>
        </v-list-item-action-text>
        <v-list-item-action-text>
          {{ dateDifferences(activity.startDate, activity.endDate) }}
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-card>
</template>

<script>
import OperationTypeIcon from "@/components/operations/OperationTypeIcon";
import { formatDistanceStrict } from "date-fns";
import { it } from "date-fns/locale";
export default {
  components: { OperationTypeIcon },
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
  methods: {
    dateDifferences (starting, ending) {
      if (starting && ending) {
        return formatDistanceStrict(new Date(starting), new Date(ending), {locale: it})
      }
      return '----'
    }
  }
};
</script>

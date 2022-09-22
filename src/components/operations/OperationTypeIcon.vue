<template>
 <div class="icon">
   <v-icon v-if="type === 'tecnical'" color="gray" :title="$t('operations.type.' + type)">mdi-hammer-wrench</v-icon>
   <v-icon v-else-if="type === 'fire'" color="gray" :title="$t('operations.type.' + type)">mdi-fire-alert</v-icon>
   <v-icon v-else-if="type === 'hydrogeological'" color="gray" :title="$t('operations.type.' + type)">mdi-water-alert-outline</v-icon>
   <v-icon v-else-if="type === 'covid'" color="gray" :title="$t('operations.type.' + type)">mdi-virus-outline</v-icon>
   <v-icon v-else-if="type === 'landslide'" color="gray" :title="$t('operations.type.' + type)">mdi-landslide-outline</v-icon>
   <v-icon v-else-if="type === 'rescue'" color="gray" :title="$t('operations.type.' + type)">mdi-lifebuoy</v-icon>
   <v-icon v-else-if="type === 'event'" color="gray" :title="$t('operations.type.' + type)">mdi-calendar-text</v-icon>
   <v-icon v-else color="gray" :title="$t('operations.type.' + type)">mdi-ballot-outline</v-icon>
 </div>
</template>

<script>
export default {
  name: "OperationTypeIcon",
  props: {
    type: {
      type: String,
      default: 'other'
    }
  }
};
</script>

<style scoped>

</style>

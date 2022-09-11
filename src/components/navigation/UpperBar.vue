<template>
  <div>
    <v-system-bar
      height="30"
      color="#005dbc"
    >
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <a href="https://comune.settimomilanese.mi.it" target="_blank" style="color: white" title="Vai al sito web del comune">{{ $t('zone') }}</a>
        <v-spacer />
        <span style="color: white" class="text-uppercase">{{ $t('translation.it') }}</span>
      </v-container>
    </v-system-bar>
  </div>
</template>

<script>
export default {
  name: "UpperBar"
};
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}
.navbar-item {
  color: #ffffff;
}
</style>

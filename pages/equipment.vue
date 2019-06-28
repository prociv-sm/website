<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-toolbar style="background-color: transparent; box-shadow: none;">
        <v-toolbar-title>Attrezzature</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>-->
      </v-toolbar>
    </v-layout>
    <v-layout wrap row>
      <v-flex xs10 offset-xs1 pb-4>
        <div class="text-xs-center">
          <v-btn-toggle>
            <v-btn flat value="generator">
              Motopompe
            </v-btn>
            <v-btn flat value="truck">
              Generatori
            </v-btn>
            <v-btn flat value="trailer">
              Rimorchi
            </v-btn>
            <v-btn flat value="all">
              Tutti
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

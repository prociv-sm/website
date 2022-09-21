<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-container class="py-2 py-lg-4">
      <page-title i18n="operations.add" title='Interventi' class="mb-2" />
      <!-- Activities list -->
      <div class="flex-grow-1 min-w-0">
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="intervention.title"
                :label="$t('activity.fields.title')"
                placeholder="Rimozione albero in via Roma"
                persistent-placeholder
                :rules="[v => !!v || $t('common.required')]"
                required
                dense
                outlined
              />
              <v-text-field
                v-model="intervention.description"
                :label="$t('activity.fields.description')"
                placeholder="Rimozione albero in via Roma in ausilio alla polizia locale"
                persistent-placeholder
                :rules="[v => !!v || $t('common.required')]"
                required
                dense
                outlined
              />
              <vc-date-picker v-model="eventDate" color='blue' :is-dark='false' :masks="masks" :is-expanded='true' :is-range='true' mode="dateTime" is24hr>
                <template #default="{ inputValue, inputEvents, isDragging }">
                  <v-row dense>
                    <v-col cols="6">
                      <v-text-field
                        dense
                        class="mb-1"
                        outlined
                        :label="$t('activity.fields.startDate')"
                        :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                        :value="inputValue.start"
                        :rules="[v => !!v || $t('common.required')]"
                        v-on="inputEvents.start"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        dense
                        outlined
                        :label="$t('activity.fields.endDate')"
                        :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                        :value="inputValue.end"
                        :rules="[v => !!v || $t('common.required')]"
                        v-on="inputEvents.end"
                      />
                    </v-col>
                  </v-row>
                </template>
              </vc-date-picker>
              <v-select
                v-model="intervention.type"
                :items="types"
                item-text="text"
                item-value="value"
                :label="$t('activity.fields.type')"
                :rules="[v => !!v || $t('common.required')]"
                required
                dense
                outlined
              />
              <v-text-field
                v-model="intervention.location"
                :label="$t('activity.fields.location')"
                placeholder="Via Roma 1, Settimo Milanese (MI)"
                persistent-placeholder
                required
                dense
                outlined
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-if="loggedIn"
              color="primary"
              style="color: white"
              @click="saveIntervention"
            >
              {{ $t('common.save') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
export default {
  name: "AddOperation",
  components: { PageTitle },
  middleware: 'auth',
  head: {
    title: "Create Operation",
    meta: [
      // Open Graph
      { name: "og:title", content: "Create Operation" },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://procivsettimomi.it" },
      { name: "og:image", content: "/assets/img/activity.jpg" },
    ]
  },
  data() {
    return {
      types: [
        { text: "Tecnico", value: "tecnical" },
        { text: "Incendio", value: "fire" },
        { text: "Idrogeologico", value: "hydrogeological" },
        { text: "Ausilio Covid-19", value: "covid" },
        { text: "Dissesto", value: "landslide" },
        { text: "Soccorso", value: "rescue" },
        { text: "Evento", value: "event" },
        { text: "Altro", value: "other" }
      ],
      intervention: {
        title: '',
        description: '',
        type: 'tecnical',
        location: '',
      },
      eventDate: {
        start: new Date(),
        end: new Date()
      },
      masks: {
        input: 'YYYY-MM-DD h:mm A'
      }
    }
  },
  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    }
  },
  methods: {
    saveIntervention() {
      this.$axios.$post('/api/v1/activities', {
        title: this.intervention.title,
        description: this.intervention.description,
        type: this.intervention.type,
        location: this.intervention.location,
        startDate: new Date(this.eventDate.start),
        endDate: new Date(this.eventDate.end)
      }).then((response) => {
        this.$router.push('/operations')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
};
</script>

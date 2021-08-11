<template>
  <div class="home full-app d-flex align-center justify-center">
    <v-card max-width="600" width="90%">
      <v-card-text>
        <h1 class="primary--text text-center mt-2">Trabajos en Casa</h1>
        <v-select
          :items="participants"
          label="Elegir Participante"
          outlined
          large
          class="mt-10"
          v-model="participant"
          item-text="text"
          item-value="value"
          @change="onChangePointsHandler"
        ></v-select>

        <transition name="expand">
          <div class="points text-center" v-if="participant">
            <h3>Puntos Ganados</h3>
            <v-avatar color="green draken-2" size="75" class="mt-2">
              <span class="white--text text-h5">{{positivePoints}}</span>
            </v-avatar>
            <div class="mt-3 mb-5">
              <v-btn elevation="2" fab color="primary"  @click="addPointHandler">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <h3 class="mt-5">Puntos Negativos</h3>
            <v-avatar color="red darken-2" size="75" class="mt-2">
              <span class="white--text text-h5">{{negativePoints}}</span>
            </v-avatar>
            <div class="mt-3 mb-5">
              <v-btn elevation="2" fab color="primary" @click="addNegativePointHandler">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>

            <v-divider></v-divider>

            <v-row class="mt-3">
              <v-col cols="6">
                <div class="text-caption">TOTAL GANADO</div>
                <strong>GTQ {{getTotal}}</strong>
              </v-col>
              <v-col cols="6">
                <div class="text-caption">TOTAL PERDIDO</div>
                <strong>GTQ {{parseFloat(negativePoints).toFixed(2)}}</strong>
              </v-col>
            </v-row>
          </div>
        </transition>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar"> Contraseña incorrecta </v-snackbar>
  </div>
</template>

<script>
import { addPoint, onChangePoints } from "@/firebase/db";
export default {
  name: "HomePage",
  data: () => ({
    snackbar: false,
    participant: false,
    positivePoints: 0,
    negativePoints: 0,
    participants: [
      {
        text: "Nelson Daniel",
        value: "dani",
      },
      {
        text: "Carlos Fernando",
        value: "cali",
      },
    ],
  }),
  methods: {
    async addPointHandler() {
      this.positivePoints++
      await addPoint(
        this.participant,
        this.positivePoints,
        this.negativePoints
      );
    },
    async addNegativePointHandler() {
      this.negativePoints++
      await addPoint(
        this.participant,
        this.positivePoints,
        this.negativePoints
      );
    },
    async onChangePointsHandler() {
      const snapshot = await onChangePoints(this.participant)
      if(snapshot.exists()) {
        const val = snapshot.val()
        this.positivePoints = val.points
        this.negativePoints = val.negatives

      }
    }
  },
  computed: {    
    getTotal() {
      return parseFloat(parseFloat(this.positivePoints) - parseFloat(this.negativePoints)).toFixed(2)
    }
  }
};
</script>

<style lang="scss">
.full-app {
  background-color: #1ca05d;
  height: 100vh;
  overflow: hidden;
}
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.5s ease;
  max-height: 400px;
}

.expand-enter,
.expand-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
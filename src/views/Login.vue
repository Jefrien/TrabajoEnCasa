<template>
  <div class="full-app d-flex align-center justify-center">
    <v-card max-width="400" width="90%">
      <v-card-text>
        <h1 class="primary--text text-center mt-2">Trabajos en Casa</h1>
        <v-form class="mt-10" @submit.prevent="onSubmit">
          <v-text-field
            label="Contraseña"
            filled
            type="password"
            v-model="password"
          ></v-text-field>
          <v-btn block rounded color="primary" large elevation="0" type="submit"
            >Entrar</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar">
        Contraseña incorrecta            
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    defaultPassword: "3953",
    password: "",
    snackbar: false
  }),
  methods: {
    onSubmit() {
      if (this.password == this.defaultPassword) {
        this.$router.push("/")
      } else {
          this.snackbar = true
      }
    },
  },
};
</script>

<style lang="scss">
.full-app {
  background-color: #1ca05d;
  height: 100vh;
  overflow: hidden;
}
</style>
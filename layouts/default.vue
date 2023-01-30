<template>
  <v-app>
    <v-navigation-drawer app style="background: #ffffff" v-model="drawer">
      <v-container align="center">
        <v-hover>
          <v-avatar size="180">
            <v-img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></v-img>
          </v-avatar>
        </v-hover>
        <p style="margin-top: 10px color:black">
          簡簡單單創造美好生活，熱愛潛水和音樂。
        </p>
        <v-divider style="margin-top: -15px; margin-bottom: 20px"></v-divider>
        <v-row align="center" style="margin-left: 2px">
          <v-icon style="margin-right: 10px">mdi-cellphone</v-icon>
          <p style="font-size: 8px; margin: 0">0968-717579</p>
        </v-row>
        <v-row align="center" style="margin-left: 2px">
          <v-icon style="margin-right: 10px">mdi-email-box</v-icon>
          <p style="font-size: 8px; margin: 0">kaichun831@gmail.com</p>
        </v-row>
        <v-row align="center" style="margin-left: 2px">
          <v-icon style="margin-right: 10px">mdi-github</v-icon>
          <a
            href="https://github.com/kaichun831"
            style="font-size: 8px; margin: 0"
            >https://github.com/kaichun831</a
          >
        </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main style="background: white">
      <Nuxt />
    </v-main>
    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

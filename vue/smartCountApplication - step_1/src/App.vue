<template>
  <v-app>
    <v-content>
      <TheSettingsBoard></TheSettingsBoard>
    </v-content>
  </v-app>
</template>

<script>
import TheSettingsBoard from "@/components/TheSettingsBoard.vue";
export default {
  name: "App",

  components: {
    TheSettingsBoard
  }
};
</script>

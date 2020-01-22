<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="4">
                <h2>Привет!</h2>
                <p style="margin-top:20px !important">
                  {{
                  `Добро пожаловать на ${dayCounter} тренировочный день. Ваш последний результат — решено ${taskCounter} из ${taskTotal}. Общая точность ${solvedPercentage} %`
                  }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="4">
                <h3 style="margin-bottom:20px !important">Настройки</h3>
                <v-slider
                  v-model="settings.duration.current"
                  :min="settings.duration.min"
                  :max="settings.duration.max"
                  height="10px !important"
                >
                  <template v-slot:prepend>
                    <span>{{ settings.duration.min }}</span>
                  </template>
                  <template v-slot:append>
                    <span>{{ settings.duration.max }}</span>
                  </template>
                </v-slider>
                <p
                  style="margin-bottom:30px !important"
                >{{ `Длительность ${settings.duration.current} минут` }}</p>
                <v-slider
                  v-model="settings.complexity.current"
                  :min="settings.complexity.min"
                  :max="settings.complexity.max"
                  height="10px !important"
                >
                  <template v-slot:prepend>
                    <span>{{ settings.complexity.min }}</span>
                  </template>
                  <template v-slot:append>
                    <span>{{ settings.complexity.max }}</span>
                  </template>
                </v-slider>
                <p
                  style="margin-bottom:40px !important"
                >{{ `Сложность ${settings.complexity.current}` }}</p>
                <div v-for="checkbox in settings.actions" :key="checkbox.id">
                  <v-checkbox v-model="checkbox.selected" :label="checkbox.label" height="12px"></v-checkbox>
                </div>
              </v-col>
              <v-col cols="7"></v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="10"></v-col>
              <v-col cols="2">
                <v-btn v-on:click.prevent="Semit('sessionBegin')" small>Play!</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
    dayCounter: 1,
    taskCounter: 0,
    taskTotal: 25,
    solvedPercentage: 0,
    settings: {
      duration: { min: 1, max: 15, current: 7 },
      complexity: { min: 1, max: 10, current: 5 },
      actions: [
        { id: 1, selected: true, label: "Суммирование" },
        { id: 2, selected: false, label: "Разность" },
        { id: 3, selected: false, label: "Умножение" },
        { id: 4, selected: false, label: "Деление" },
        { id: 5, selected: false, label: "Возведение в степень" }
      ]
    }
  })
};
</script>

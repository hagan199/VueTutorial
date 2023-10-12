const app = Vue.createApp({
  data() {
      return {
          courseGoal: "Finish",
          courseGoalB: "Finish adl lglg",
          vueLink: 'https://arsenal.com'
      };
  },
  methods: {
      outputGoal() {
          const randomNumber = Math.random();
          if (randomNumber < 0.5) {
              return this.courseGoal;
          } else {
              return this.courseGoalB;
          }
      }
  }
});

app.mount('#app');

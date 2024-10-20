import { defineComponent, createApp } from 'vue';

const App = defineComponent({
  name: 'App',

  setup() {
    function formatAsLocalDate() {
      return `Сегодня ${new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })}`;
    }

    return {
      formatAsLocalDate,
    };
  },

  template: `<div>{{ formatAsLocalDate() }}</div>`,
});

const app = createApp(App);

const vm = app.mount('#app');

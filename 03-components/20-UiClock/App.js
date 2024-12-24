import { defineComponent, ref } from 'vue'
import UiClock from './UiClock.js'

export default defineComponent({
  name: 'App',

  components: {
    UiClock,
  },

  setup() {
    const showClock = ref(true)
    return {
      showClock,
    }
  },

  template: `
    <div>
      <label>
        <input type="checkbox" v-model="showClock" />
        Отображать часы
      </label>
      <ui-clock v-if="showClock" />
    </div>
  `,
})

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0)

    const decrementCount = () => {
      count.value--
    }

    const incrementCount = () => {
      count.value++
    }

    return {
      count,
      decrementCount,
      incrementCount,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count === 0"
        @click="decrementCount"
      >➖</button>

      <span class="count" data-testid="count">{{count}}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="count === 5"
        @click="incrementCount"
      >➕</button>
    </div>
  `,
})

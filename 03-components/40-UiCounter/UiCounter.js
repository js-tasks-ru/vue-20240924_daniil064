import { defineComponent, computed } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },

    count: {
      type: Number,
      default: 0,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const count = computed({
      get() {
        return props.count
      },

      set(value) {
        emit('update:count', value)
      },
    })

    const isMinValue = computed(() => count.value === props.min)
    const isMaxValue = computed(() => count.value === props.max)

    function decrementValue() {
      count.value--
    }

    function incrementValue() {
      count.value++
    }

    return {
      count,
      isMinValue,
      isMaxValue,
      decrementValue,
      incrementValue,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="isMinValue" @click="decrementValue">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="isMaxValue" @click="incrementValue">➕</UiButton>
    </div>
  `,
})

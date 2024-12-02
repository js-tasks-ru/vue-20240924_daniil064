import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref('')

    const updateTime = () => {
      const now = new Date()
      currentTime.value = now.toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    let timer

    onMounted(() => {
      updateTime()
      timer = setInterval(updateTime, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})

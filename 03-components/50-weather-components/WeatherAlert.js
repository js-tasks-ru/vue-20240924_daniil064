import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    weather: {
      type: Object,
      default: () => {},
    },
  },

  template: `
          <div class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{weather.alert.sender_name}}: {{weather.alert.description}}</span>
          </div>
        `,
})

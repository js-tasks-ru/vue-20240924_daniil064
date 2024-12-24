import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherInfo',

  props: {
    weather: {
      type: Object,
      default: () => {},
    },

    weatherIcons: {
      type: Object,
      default: () => {},
    },
  },

  setup(props) {
    const findIconCondition = weatherId => {
      return props.weatherIcons[weatherId]
    }

    const calculateTemp = weather => {
      const temp = weather.current.temp - 273.15

      return `${temp.toFixed(1)} °C`
    }

    return {
      calculateTemp,
      findIconCondition,
    }
  },

  template: `
          <div>
            <h2 class="weather-card__name">
              {{ weather.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weather.current.dt }}
            </div>
          </div>

          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weather.current.weather.description">{{ findIconCondition(weather.current.weather.id) }}</div>
            <div class="weather-conditions__temp">{{ calculateTemp(weather)}}</div>
          </div>
        `,
})

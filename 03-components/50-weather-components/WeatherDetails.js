import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherDetails',

  props: {
    weather: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    const convertPressure = pressureInMPa => {
      const pressureInHPa = pressureInMPa * 1000

      const pressureInMmHg = (pressureInHPa * 0.75) / 1000

      return Math.round(pressureInMmHg)
    }

    return {
      convertPressure,
    }
  },

  template: `
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ convertPressure(weather.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
            </div>
          </div>
        `,
})

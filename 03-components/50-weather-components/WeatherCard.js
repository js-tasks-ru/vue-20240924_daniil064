import { defineComponent, computed } from 'vue'
import WeatherAlert from './WeatherAlert'
import WeatherInfo from './WeatherInfo'
import WeatherDetails from './WeatherDetails'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
    WeatherInfo,
    WeatherDetails,
  },

  props: {
    weatherData: {
      type: Array,
      default: () => [],
    },

    weatherIcons: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    const hasNight = weather => {
      console.log(weather)
      return weather.current.dt < weather.current.sunrise || weather.current.dt >= weather.current.sunset
    }

    return {
      hasNight,
    }
  },

  template: `

      <ul class="weather-list unstyled-list">
        <li v-for="weather in weatherData" class="weather-card" :class="{'weather-card--night': hasNight(weather)}">
          <weather-alert v-if="weather.alert" :weather />
          <weather-info :weather :weather-icons="weatherIcons"/>
          <weather-details :weather/>
        </li>
      </ul>
    `,
})

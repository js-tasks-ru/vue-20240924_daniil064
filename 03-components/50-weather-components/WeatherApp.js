import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherCard from './WeatherCard.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard,
  },

  setup() {
    const weatherData = getWeatherData()

    return {
      weatherData,
      WeatherConditionIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <weather-card :weather-data="weatherData" :weather-icons="WeatherConditionIcons"/>
    </div>
  `,
})

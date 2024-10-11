import { defineComponent } from 'vue';
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts';

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const calculateTemp = weather => {
      const temp = weather.current.temp - 273.15;

      return `${temp.toFixed(1)} °C`;
    };

    const findIconCondition = weatherId => {
      return WeatherConditionIcons[weatherId];
    };

    const hasNight = weather => {
      return weather.current.dt < weather.current.sunrise || weather.current.dt >= weather.current.sunset;
    };

    const convertPressure = pressureInMPa => {
      const pressureInHPa = pressureInMPa * 1000;

      const pressureInMmHg = (pressureInHPa * 0.75) / 1000;

      return Math.round(pressureInMmHg);
    };

    return {
      getWeatherData,
      calculateTemp,
      findIconCondition,
      hasNight,
      convertPressure,
    };
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="weather in getWeatherData()" class="weather-card" :class="{'weather-card--night': hasNight(weather)}">
        <div v-if="weather.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{weather.alert.sender_name}}: {{weather.alert.description}}</span>
          </div>

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
        </li>
      </ul>
    </div>
  `,
});

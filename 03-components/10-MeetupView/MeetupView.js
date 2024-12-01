import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupInfo,
    MeetupDescription,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      default: () => {},
    },
  },

  template: `
    <div>
      <meetup-cover :title="meetup.title" :image="meetup.image"/>
  
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>
            
            <meetup-description :description="meetup.description"/>

            <h2>Программа</h2>

            <meetup-agenda v-if="meetup.agenda.length > 0" :agenda="meetup.agenda"/>

            <ui-alert v-else-if="meetup.agenda.length === 0">Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">

            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </ui-container>
    </div>
  `,
})

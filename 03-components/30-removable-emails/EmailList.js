import { defineComponent } from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['remove'],

  methods: {
    removed(index) {
      this.$emit('remove', index)
    },
  },

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <email-list-item
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
        @remove="removed(index)"
      />
    </ul>
  `,
})

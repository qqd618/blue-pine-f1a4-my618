import { createApp } from 'vue'
import ChatMessages from './components/ChatMessages.vue'

const app = createApp({
  data() {
    return {
      messages: [
        { type: 'text', content: '您好，我想咨询下产品使用方法。' },
        { type: 'file', filename: '使用说明.pdf', url: 'https://example.com/file.pdf' }
      ]
    }
  },
  components: {
    ChatMessages
  },
  template: `
    <ChatMessages :messages="messages" />
  `
})

app.mount('#app')

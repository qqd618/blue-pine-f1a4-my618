<template>
  <div class="chat-messages">
    <div v-for="(msg, index) in messages" :key="index" class="message">
      <div v-if="msg.type === 'text'">
        🗨️ 用户消息：{{ msg.content }}
      </div>
      <div v-else-if="msg.type === 'file'">
        📎 文件：<a :href="msg.url" target="_blank">{{ msg.filename }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessages',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.chat-messages {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.message {
  margin-bottom: 10px;
}
</style>

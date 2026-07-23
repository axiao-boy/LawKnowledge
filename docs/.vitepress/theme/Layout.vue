<script setup lang="ts">
import { computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import GiscusComment from './components/GiscusComment.vue'

const { Layout } = DefaultTheme
const route = useRoute()

// 首页不显示评论区（仅内容页显示）
const showComment = computed(() => {
  return route.path !== '/' && !route.path.startsWith('/public')
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <GiscusComment v-if="showComment" />
    </template>
  </Layout>
</template>

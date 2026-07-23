import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout
} satisfies Theme

import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)

export default (    {
    duration: 0, // Animation speed
    offset: 250, // Offset from element, you can use positive or negative values
    container: '', // the scroll container, default is window,use document.querySelector to query the Element
  }
  )

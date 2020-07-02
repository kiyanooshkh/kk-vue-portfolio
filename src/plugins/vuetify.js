import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme:{
    themes: {
      light: {
        primary: '#3f4042',
        dark:'#282828',
        success: '#20BF55',
        info:'#FFF1D0',
        error:'#DD1C1A',
        secondary: '#65c9ff',
        accent: '#086788',
        anchor: '#086788',
        warning: '#F0C808',
      },
    },
  }
});

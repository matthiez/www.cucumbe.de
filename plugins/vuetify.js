import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify, {
    iconfont: 'fa',
    theme: {
        primary: '#121212', // a color that is not in the material colors palette
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
    }
});
import Vue from 'vue'
import Vuex from 'vuex'
import getData from './modules/get'
import new_get from './modules/new_get'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        getData: getData,
        new_get: new_get
    },
});

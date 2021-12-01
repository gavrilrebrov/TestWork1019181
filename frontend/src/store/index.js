import { createStore } from 'vuex'

import categories from './categories'

export default createStore({
    modules: {
        categories,
    },


    state () {
        return {
            loading: {
                init: false,
            }
        }
    }
})
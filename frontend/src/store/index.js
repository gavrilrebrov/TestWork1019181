import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            loading: {
                init: false,
            }
        }
    }
})
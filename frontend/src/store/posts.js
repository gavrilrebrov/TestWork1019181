import http from '@/http'
import router from '@/router'

export default {
    namespaced: true,

    state () {
        return {
            list: [],
            item: null,

            loading: {
                get: false,
                save: false,
                destroy: false,
            }
        }
    },

    mutations: {
        list (state, value) {
            state.list = value
        },

        item (state, value) {
            state.item = value
        },

        'loading.get' (state, value) {
            state.loading.get = value
        },

        'loading.save' (state, value) {
            state.loading.save = value
        },

        'loading.destroy' (state, value) {
            state.loading.destroy = value
        }
    },

    actions: {
        async 'get.list' (ctx) {
            ctx.commit('loading.get', true)

            const list = await http.get('/posts')
            ctx.commit('list', list)

            ctx.commit('loading.get', false)
        },

        async 'get.item' (ctx, id) {
            ctx.commit('loading.get', true)

            const item = await http.get(`/posts/${id}`)
            ctx.commit('item', item)

            ctx.commit('loading.get', false)
        },

        async destroy (ctx, id) {
            ctx.commit('loading.destroy', true)

            await http.destroy(`/posts/${id}`)
            await router.push('/')

            ctx.commit('loading.destroy', false)
        },

        async save (ctx, data) {
            ctx.commit('loading.save', true)

            const item = await http.save('/posts', {
                title: data.fields.title,
                content: data.fields.content,
                category_id: data.fields.category_id,
                thumbnail: data.files.thumbnail.file
            }, data.id)

            if (item) {
                await router.push('/')
            }

            ctx.commit('loading.save', false)
        }
    }
}
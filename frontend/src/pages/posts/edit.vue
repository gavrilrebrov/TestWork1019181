<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import Field from '@/components/Field.vue'
import Loader from '@/components/Loader.vue'
import Icon from '@/components/Icon.vue'

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const store = useStore()
const route = useRoute()

const loading = computed(() => store.state.posts.loading)
const categoriesLoading = computed(() => store.state.categories.loading)

const categories = computed(() => {
    const cats = store.state.categories.list && store.state.categories.list.map(i => ({
        value: i.id,
        label: i.name,
    }))

    cats.unshift({
        value: null,
        label: 'Не выбрана'
    })

    return cats
})

const notice = ref(null)

const item = computed(() => store.state.posts.item)

const fields = ref({
    title: '',
    content: '',
    category_id: null,
})

const files = ref({
    thumbnail: {
        file: null,
        preview: null,
        id: null,
    }
})

watch(item, value => {
    if (value) {
        fields.value.title = value.title
        fields.value.content = value.content
        fields.value.category_id = value.category.id

        if (value.thumbnail) {
            files.value.thumbnail.preview = `${apiUrl}${value.thumbnail.url}`
            files.value.thumbnail.id = value.thumbnail.id
        }
    }
})

onMounted(() => {
    store.dispatch('categories/get.list')

    if (route.params.postId) {
        store.dispatch('posts/get.item', route.params.postId)
    }
})

const save = e => {
    e.preventDefault()
    notice.value = null

    if (fields.value.title === '') {
        notice.value = 'Название не должно быть пустым'
    } else {
        store.dispatch('posts/save', {
            id: route.params.postId,
            fields: fields.value,
            files: files.value
        })
    }
}

const destroy = () => store.dispatch('posts/destroy', route.params.postId)
</script>

<template>
<Loader v-if="loading.get" />

<div v-if="notice" class="bg-red-100 text-red-500 text-sm px-3 py-2 rounded mb-3">
    {{ notice }}
</div>

<form id="posts_form" v-if="!loading.get" @submit="save">
    <div class="flex gap-x-5">
        <div class="w-3/12 flex-shrink-0">
            <Field type="image" v-model="files.thumbnail" label="Картинка" />
        </div>

        <div class="w-9/12 flex flex-col gap-y-5">
            <div>
                <Field type="input" label="Название" v-model="fields.title" />
            </div>

            <div>
                <Field label="Категория" v-model="fields.category_id" type="select" :items="categories" v-if="!categoriesLoading.list" />
            </div>

            <div>
                <Field label="Описание" v-model="fields.content" type="editor" />
            </div>

            <div v-if="route.params.postId">
                <button class="button button_red" @click="destroy">
                    <Icon v-if="loading.destroy" class="w-5 h-5 animate-spin" icon="loader" />
                    Удалить
                </button>
            </div>
        </div>
    </div>
</form>
</template>
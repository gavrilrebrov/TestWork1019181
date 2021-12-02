<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

import Icon from '@/components/Icon.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const go = path => router.push(path)
const back = () => router.go(-1)

const loading = computed(() => store.state.posts.loading)

const title = computed(() => {
    if (route.name === 'posts-list') {
        return 'Все посты'
    } else if (route.name === 'posts-create') {
        return 'Новый пост'
    } else if (route.name === 'posts-edit') {
        return 'Редактировать пост'
    }
})
</script>

<template>
<div class="py-4 px-6 bg-white rounded shadow">
    <div class="border-b -mx-6 -mt-4 px-6 py-4 flex justify-between items-center gap-x-3">
        <button @click="back" v-if="route.name !== 'posts-list'" class="-ml-1">
            <Icon icon="arrow-left" class="w-6 h-6 text-blue-500" />
        </button>

        <div class="font-semibold flex-grow-1 w-full">
            {{ title }}
        </div>

        <div class="-my-4 -mr-4">
            <button class="button" @click="go('/create')" v-if="route.name === 'posts-list'">
                Создать
            </button>

            <button class="button" form="posts_form" v-if="route.name === 'posts-edit' || route.name === 'posts-create'"
                :disabled="loading.save"
            >
                <Icon v-if="loading.save" class="w-5 h-5 animate-spin" icon="loader" />
                Сохранить
            </button>
        </div>
    </div>

    <div class="mt-4">
        <router-view />
    </div>
</div>
</template>
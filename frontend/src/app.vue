<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const go = path => router.push(path)
const is = type => {
    return route.name === `${type}-list` || route.name === `${type}-create` || route.name === `${type}-edit`
}
</script>

<template>
<div class="min-h-screen bg-gray-200">
    <div class="bg-gray-800">
        <div class="container mx-auto lg:max-w-screen-lg text-lg font-semibold text-white py-4">
            Тестовое задание: TestWork1019181
        </div>
    </div>

    <div class="container mx-auto lg:max-w-screen-lg mt-6">
        <div class="flex gap-x-6">
            <div class="w-2/12 flex-shrink-0 flex flex-col gap-y-4 font-medium text-gray-500">
                <div class="cursor-pointer" @click="go('/')"
                    :class="{
                        'text-blue-500 font-semibold': is('posts')
                    }"
                >
                    Посты
                </div>

                <div class="cursor-pointer" @click="go('/categories')"
                    :class="{
                        'text-blue-500 font-semibold': is('categories')
                    }"
                >
                    Категории
                </div>
            </div>

            <div class="w-10/12 flex-shrink-0">
                <router-view />
            </div>
        </div>
    </div>
</div>
</template>
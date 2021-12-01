import { createRouter, createWebHashHistory  } from 'vue-router'

import Posts from '@/pages/posts/index.vue'
import PostsList from '@/pages/posts/list.vue'
import PostsEdit from '@/pages/posts/edit.vue'

import Categories from '@/pages/categories/index.vue'
import CategoriesList from '@/pages/categories/list.vue'
import CategoriesEdit from '@/pages/categories/edit.vue'

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: Posts,
            children: [
                {
                    path: '',
                    component: PostsList,
                    name: 'posts-list'
                },
                {
                    path: 'create',
                    component: PostsEdit,
                    name: 'posts-create'
                },
                {
                    path: ':postId',
                    component: PostsEdit,
                    name: 'posts-edit'
                }
            ]
        },
        {
            path: '/categories',
            component: Categories,
            children: [
                {
                    path: '',
                    component: CategoriesList,
                    name: 'categories-list'
                },
                {
                    path: 'create',
                    component: CategoriesEdit,
                    name: 'categories-create'
                },
                {
                    path: ':categoryId',
                    component: CategoriesEdit,
                    name: 'categories-edit'
                }
            ]
        }
    ]
})
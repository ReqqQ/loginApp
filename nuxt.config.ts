import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,
    meta: {
        charset: 'utf-8',
        meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
        link: [
            {
                rel: 'stylesheet',
                style: 'text/css',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                style: 'text/css',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css'
            }
        ],
        script: [
            { src :'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'}
        ],
    },
})

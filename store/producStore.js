import { defineStore } from 'pinia'
import {computed} from "vue";

export const useProductStore = defineStore('product', () => {
    const product = computed(() => {
        return [
            {
                title: 'Burj Al Arab Jumeirah',
                description: 'Jumeirah Beach Road, Dubai, United Arab Emirates',
                price: '$2500',
                img: '1.jpg',
            },
            {
                title: 'Lake Front Spacious 1BR Concorde Tower Ahlan Holiday Cluster H',
                description: 'Cluster H, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
                price: '$2000',
                img: '2.jpg',
            },
            {
                title: '2BDR With Burj Khalifa View',
                description: 'Business Bay Bridge, Dubai, United Arab Emirates',
                price: '$1500',
                img: '3.jpg',
            },
            {
                title: 'Riu Dubai Beach Resort - All Inclusive',
                description: 'Deira Islands, Dubai, United Arab Emirates',
                price: '$1700',
                img: '4.jpg',
            },
            {
                title: 'Sofitel Dubai The Palm Resort & Spa',
                description: 'The Palm Jumeirah, East Crescent Road, Palm Jumeirah, Dubai, United Arab Emirates',
                price: '$1800',
                img: '5.jpg',
            },
            {
                title: 'Pullman Dubai Downtown',
                description: 'Marasi Drive, Business Bay, Dubai, United Arab Emirates',
                price: '$1900',
                img: '6.jpg',
            },
        ]
    })

    const getOne = (id) => product.value[id]

    return {
        product,
        getOne
    }
})
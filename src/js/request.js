import axios from 'axios'
const baseUrl = ' https://www.easy-mock.com/mock/5c9f392972327c362481d1e1/bilibili/'

export const getNav = (parmes) => axios.get(baseUrl + 'getNav', parmes)
export const getVideos = (parmes) => axios.get(baseUrl + 'getVideos', parmes)
export const getSwiperImg = (parmes) => axios.get(baseUrl + 'getSwiperImg', parmes)
export const getChannels = (parmes) => axios.get(baseUrl + 'getChannels', parmes)
export const getSubContent = (parmes) => axios.get(baseUrl + 'getSubContent', parmes)
export const getSubTitle = (params) => axios.get(baseUrl + 'getSubTitle', params)


import { GET_API_METHOD, GET_API_USER, GET_AREA_DATA, GET_REGION_DATA, POST_TOKEN } from '../constants/All'

export const getRegionData = (data) => {
    return {
        type:GET_REGION_DATA,
        payload:data
    }
}

export const getAreaData = (data) => {
    return {
        type:GET_AREA_DATA,
        payload:data
    }
}

export const postToken = (data) => {
    
    return {
        type:POST_TOKEN,
        payload:data
    }
}

export const getApiMethod = (data) => {
    return {
        type : GET_API_METHOD,
        payload:data
    }
}

export const getApiUser = (data) => {
    return {
        type:GET_API_USER,
        payload:data
    }
}
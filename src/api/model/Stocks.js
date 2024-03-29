import { GET, PUT, DELETE } from "../fetch";
const root = "stock"

export default {
    getInfo: async function (id, token) {
        try {
            let response = await GET(`/${root}/get-info/${id}`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    updateInfo: async function (id, updateData, token) {
        try {
            let response = await PUT(`/${root}/update-info/${id}`, updateData, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    delete: async function (id, token) {
        try {
            let response = await DELETE(`/${root}/${id}`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    getDataWithMonth: async function (id, month, year, token) {
        try {
            let response = await GET(`/${root}/get-data-with-month/${month}/${year}/${id}`, token)
            return response
        } catch (error) {
            throw error
        }
    }
}

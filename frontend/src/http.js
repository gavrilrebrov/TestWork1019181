const apiUrl = import.meta.env.VITE_API_URL + '/api' || 'http://localhost:8080/api'

export default {
    async save (url, data, id = '') {
        try {
            const formData = new FormData()

            for (let key in data) {
                if (data[key]) formData.append(key, data[key])
            }

            if (id) {
                formData.append('_method', 'PUT')
            }

            let addit = id ? `/${id}` : ''

            const res = await fetch(`${apiUrl}${url}${addit}`, {
                method: 'post',
                body: formData,
            })

            console.log('res: ', res)
            console.log('url: ', url)
            console.log('data: ', data)

            return await res.json()
        } catch (err) {
            console.error('err: ', err)
        }
    },

    async get (query) {
        try {
            const res = await fetch(apiUrl + query, {
                method: 'get',
            })

            const json = await res.json()

            return json.data
        } catch (err) {
            console.error('err: ', err)
        }
    },

    async destroy (url) {
        try {
            const res = await fetch(apiUrl + url, {
                method: 'delete',
            })

            return res
        } catch (err) {
            console.error('err: ', err)
        }
    },
}
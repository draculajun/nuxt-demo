const jsonToFormData = (json) => {
    const formData = new FormData();
    for (let key in json) {
        formData.append(key, json[key]);
    }
    return formData;
}

export default defineNuxtPlugin({
    setup() {
        const api = $fetch.create({
            baseURL: useRuntimeConfig().public.baseURL,
            onRequest({request, options, error}) {
                options.body = jsonToFormData(options.body);
                // if (session.value?.token) {
                // const headers = options.headers ||= {}
                // if (Array.isArray(headers)) {
                //     headers.push(['Authorization', `Bearer ${session.value?.token}`])
                // } else if (headers instanceof Headers) {
                //     headers.set('Authorization', `Bearer ${session.value?.token}`)
                // } else {
                //     headers.Authorization = `Bearer ${session.value?.token}`
                // }
                // headers.Authorization = `Bearer TESTTOKEN`;
                // }
            },
            async onResponseError({response}) {
                // if (response.status === 401) {
                //     await nuxtApp.runWithContext(() => navigateTo('/login'))
                // }

                // if (!response.response.ok) {
                //     response.response._data = {
                //         code: -1,
                //         data: null,
                //         message: errorMsg,
                //     }
                // } else {
                //     if (response.response._data && response.response._data.code == 200) {

                //     }
                // }
            }
        })

        // Expose to useNuxtApp().$api
        return {
            provide: {
                api
            }
        }
    }
})
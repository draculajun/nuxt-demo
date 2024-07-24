const userRepository = (fetch) => ({
    list: function (body) {
        return fetch('/user/list', {
            method: 'POST',
            body,
        })
    },

    detail: function (id) {
        return fetch(`/user/${id}`, {
            method: 'GET',
        })
    }
})

export default userRepository;
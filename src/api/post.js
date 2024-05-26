export const base_url = process.env.NEXT_PUBLIC_BASE_API;

export const getPost = (data) => {
    return new Promise(function(res, rej) {
        fetch(`${base_url}/posts`, {
            method: 'post',
            body: data,
        })
            .then(res => res.json())
            .then(data => res(data.data))
            .catch(err => rej(err))
    })
}

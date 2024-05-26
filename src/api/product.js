export const base_url = process.env.NEXT_PUBLIC_BASE_API;
export const no_cache = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
}

export function createProduct(data) {
    return new Promise(function (res, rej) {
        fetch(base_url + `/products`, {
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => res(data))
            .catch(err => rej(err))
    })
}

export function getProduct(page = 1, per_page = 5) {
    return new Promise(function (res, rej) {
        fetch(base_url + `/products?_page=${page}&_per_page=${per_page}`,)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                res(data.data)
            })
            .catch(err => rej(err))
    })
}
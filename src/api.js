
const uri = {
    local: window.env['LOCAL_API_URI'],
}


const json = response => {
    if (response.ok) return response.json()
    return response.json().then(Promise.reject.bind(Promise))
}

class API {
    constructor(uri) {
        this.uri = uri
    }

    get(headersOrSignal = {}, signal = undefined) {
        let headers = headersOrSignal

        if (signal === undefined) {
            if (headersOrSignal instanceof AbortSignal) {
                signal = headersOrSignal
                headers = {}
            }
        }

        return fetch(`${this.uri}/`, {
            headers: {
                ...headers
            },
            signal
        }).then(json)
    }


    post(path, body, headers = {}) {
        return fetch(`${this.uri}/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        }).then(json)
    }

    put(path, body, headers = {}) {
        return fetch(`${this.uri}/${path}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        }).then(json)
    }

    patch(path, body, headers = {}) {
        return fetch(`${this.uri}/${path}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        }).then(json)
    }
}

const local = new API(uri.local)

export { uri, local }

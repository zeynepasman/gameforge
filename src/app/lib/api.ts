const ApiService = {
    get: <T>(url: string): Promise<T> => {
        return fetch(url)
            .then(response => {
                return response.json();
            }).catch(jsonResponse => {
                return jsonResponse;
            });
    }
}

export default ApiService;

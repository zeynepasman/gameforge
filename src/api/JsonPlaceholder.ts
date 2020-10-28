
const ApiService = {
    displayTab(value: string) {
        return fetch(`https://jsonplaceholder.typicode.com/${value}`)
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse;
            });
    },
    displayAccordion(value: string) {
        return fetch(`https://jsonplaceholder.typicode.com/${value}/1`)
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse;
            });
    }
}
export default ApiService;
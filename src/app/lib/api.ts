import { Url } from "./url";

const ApiService = {
    index: <T>(url: string): Promise<T> => {
        return fetch(url)
            .then(response => {
                return response.json();
            }).catch(jsonResponse => {
                return jsonResponse;
            });
    }
    // displayTab(value: string) {
    //     return fetch(Url.collection({ value }).tab)
    //         .then(response => {
    //             return response.json();
    //         }).catch(jsonResponse => {
    //             return jsonResponse;
    //         });
    // },
    // displayAccordion(value: string) {
    //     return fetch(Url.collection({ value, id: 1 }).accordion)
    //         .then(response => {
    //             return response.json();
    //         }).catch(jsonResponse => {
    //             return jsonResponse;
    //         });
    // }
}

export default ApiService;

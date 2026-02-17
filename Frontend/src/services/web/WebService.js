export class WebService {
    Fetch(request) {
        return fetch(request)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }
}
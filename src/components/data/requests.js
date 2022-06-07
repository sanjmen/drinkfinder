class Requests {
    async get(url) {
        try {
            const response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    }
}

export default new Requests();
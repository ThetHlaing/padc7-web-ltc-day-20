

    export const retrieveData = (key) => {
        const data = localStorage.getItem(key);
        if(data == null){
            return null
        }
        return JSON.parse(data);
    };

    export const storeData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }


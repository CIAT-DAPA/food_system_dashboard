import axios from "axios";

import Configuration from "../conf/Configuration";

class MapsData{
    get(source) {
        const url = Configuration.get_url_data() + source;
        return axios
            .get(url, {})
            .then(response => {
                return response.data;
            });
    };
}

export default new MapsData();
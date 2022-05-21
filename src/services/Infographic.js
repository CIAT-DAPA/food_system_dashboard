import axios from "axios";

import Configuration from "../conf/Configuration";

class Infographic{
    list(source) {
        const url = Configuration.get_url_infographics() + source + "_highlights.json";
        return axios
            .get(url, {})
            .then(response => {
                return response.data;
            });
    };
}

export default new Infographic();
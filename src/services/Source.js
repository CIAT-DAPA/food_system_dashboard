import axios from "axios";

import Configuration from "../conf/Configuration";

class Source{
    list(source) {
        const url = Configuration.get_url_infographics() + source + "_sources.json";
        return axios
            .get(url, {})
            .then(response => {
                return response.data;
            });
    };
}

export default new Source();
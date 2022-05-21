import axios from "axios";

import Configuration from "../conf/Configuration";

class Infographic{
    list(source) {
        console.log(Configuration.get_url_data() + source);
        return axios
            .get(Configuration.get_url_data() + source, {})
            .then(response => {
                return response.data;
            });
    };
}

export default new Infographic();
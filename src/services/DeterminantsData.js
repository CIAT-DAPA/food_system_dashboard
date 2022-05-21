import axios from "axios";

import Configuration from "../conf/Configuration";

class DeterminantsData{
    get() {
        const url = Configuration.get_url_data() + "determinants/charts.json";
        return axios
            .get(url, {})
            .then(response => {
                return response.data;
            });
    };
}

export default new DeterminantsData();
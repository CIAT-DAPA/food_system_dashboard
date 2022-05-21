const URL_RAW = "https://raw.githubusercontent.com/CIAT-DAPA/food_system_dashboard/master/";
const URL_DATA = URL_RAW + "data/";

class Configuration {
    get_url_data() {
        return URL_DATA;
    }
}

export default new Configuration();
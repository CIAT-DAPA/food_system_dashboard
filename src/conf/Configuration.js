const URL_RAW = "https://raw.githubusercontent.com/CIAT-DAPA/food_system_dashboard/master/";
const URL_DATA = URL_RAW + "data/";
const URL_INFOGRAPHICS = URL_DATA + "infographics/";

class Configuration {
    get_url_data() {
        return URL_DATA;
    }
    get_url_infographics() {
        return URL_INFOGRAPHICS;
    }
}

export default new Configuration();
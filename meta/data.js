require("dotenv").config();
const pageURL = "https://www.airbnb.com/s/france/homes?tab_id=all_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query";
const mongoURI = process.env.MONGOURI;

module.exports = {
    pageURL,
    mongoURI
};
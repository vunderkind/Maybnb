const rp = require('request-promise');

const URL = `https://www.airbnb.com/s/Seychelles/homes?adults=0&children=0&infants=0&place_id=ChIJO62-cP0hXCIR99pJ06DQ0zI&refinement_paths%5B%5D=%2Fhomes&search_type=unknown`

rp(URL)
.then((data)=> {
    //happy path
    console.log(data)
})
.catch((err)=>{
    //sad path
    console.log(err.message)
})
const data = require('./data')
const { pageURL  } = data;

const webScraping = require('./maybnbScraper');
const compareAndSaveResults = require('./resultAnalysis')

webScraping(pageURL)
.then(dataObj => {
    compareAndSaveResults(dataObj);
})
.catch(err=>console.log(err))
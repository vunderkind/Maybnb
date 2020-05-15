const data = require('./meta/data')
const { pageURL  } = data;

const webScraping = require('./meta/maybnbScraper');
const compareAndSaveResults = require('./meta/resultAnalysis')

webScraping(pageURL)
.then(dataObj => {
    compareAndSaveResults(dataObj);
    console.log(dataObj)
})
.catch(err=>console.log(err))
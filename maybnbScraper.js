const puppeteer = require('puppeteer');
    function run () {
        return new Promise(async (resolve, reject) =>{
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                var args = process.argv[2]
                await page.goto(`https://www.airbnb.com/s/${args}/homes?tab_id=all_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query`);
                await page.screenshot({path: 'sample.png'})
                
                let urls = await page.evaluate(() => {
                    let results = [];
                    let items = document.querySelectorAll('div._ttw0d');
                    items.forEach((item) => {
                        let link = item.querySelector('a._15tommw').href
                        // let name = item.querySelector('a._15tommw').getAttribute('aria-label')
                        // let price = item.querySelector('span.pdpPrice').innerText
                        // let discount = item.querySelector('div.listingDiscnt').innerText
                        results.push({
                            house_link:  link,
                            // house_name: name,
                            // prod_price: price,
                            // prod_discount: discount
                        });
                    });
                    console.log(items)
                    return results;
                })
                browser.close();
                return resolve(urls);
            } catch (e) {
                return reject(e);
            }
        })
    }
run().then(console.log).catch(console.error);
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const chineseCharRegex = /\p{Unified_Ideograph}/u;
const chineseRegex = /[\u4e00-\u9fa5]/;

const webScraper = (url) => {
//this will return the html I want.. i think. at the very least it must be slice(2) for
    //some special reason. 
    const args = process.argv.slice(2);
    //TODO: create an array that has the IDs of the pages I want, and loop through them.
    const pageId = args[0] || 46;
    //https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1
    //http://lvcnn.com/list_group.php?id=46
    //https://www.vegaschinaren.com/f.html
    // const url = `//lvcnn.com/list_group.php?id=${pageId}`
    return axios.get(url)
    .then((response) => {
      const dom = new JSDOM(response.data)
      let companyChineseNameArray = [... dom.window.document.querySelectorAll("div.black_12_bold")]
      .map(i => i.innerHTML)
      .filter(i => chineseRegex.test(i))
  //     let companyChineseNameArray = [... doc.querySelectorAll("div.black_12_bold")]
  //     .map(i => i.innerHTML);
        console.log("webScraper finished scraping, here are the results....")
        console.log(companyChineseNameArray[0])  
        let firstOne = companyChineseNameArray[0]
        return (firstOne)
    })
    .catch((error) => {
      console.log(error);
    });
}

exports.webScraper = webScraper;
// (async () => {
    
//     })();

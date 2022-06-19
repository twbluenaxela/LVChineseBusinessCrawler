//in the future I want to import all of these from constants.js
const COMPANY_CHINESE_FIELD_NAME = "chinese_name";
const COMPANY_ENGLISH_FIELD_NAME = "english_name";
const ADDRESS_FIELD_NAME = "address";
const PHONE_NUMBER_FIELD_NAME = "phone_number";

const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
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
      let companyInfoArray = [... dom.window.document.querySelectorAll(".newsbox_12_xline_black")]
      .map(i =>  ({ 
      "中文店名" : i.querySelector("div.black_12_bold").innerHTML,
      "English Name" : i.querySelector("div.black_12_normal").innerHTML,
      "地址 Address" : i.querySelector("div.black_9_mini").innerHTML,
      "電話號碼 Phone Number" : i.querySelector("td.black_12_normal").innerHTML
    }))
      //only give back the ones with Chinese names.
      // .filter(i => chineseRegex.test(i))

        console.log("webScraper finished scraping, here is the first one in the array....")
        console.log(companyInfoArray[0])  
        // let firstOne = companyInfoArray[2]
        return (companyInfoArray)
    })
    .catch((error) => {
      console.log(error);
    });
}

exports.webScraper = webScraper;
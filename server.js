const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const chineseCharRegex = /\p{Unified_Ideograph}/u;
const chineseRegex = /[\u4e00-\u9fa5]/;

(async () => {
    //this will return the html I want.. i think. at the very least it must be slice(2) for
    //some special reason. 
      const args = process.argv.slice(2);
      //TODO: create an array that has the IDs of the pages I want, and loop through them.
      const pageId = args[0] || 46;
      //https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1
      //http://lvcnn.com/list_group.php?id=46
      //https://www.vegaschinaren.com/f.html
      // const url = `//lvcnn.com/list_group.php?id=${pageId}`
      const url = `https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1`
      axios.get(url)
      .then((response) => {
        const dom = new JSDOM(response.data)
        // const element = dom.window.document.querySelector("div.black_12_bold").innerHTML
        // console.log(element)
        let companyChineseNameArray = [... dom.window.document.querySelectorAll("div.black_12_bold")]
        .map(i => i.innerHTML)
        .filter(i => chineseRegex.test(i))
    //     let companyChineseNameArray = [... doc.querySelectorAll("div.black_12_bold")]
    //     .map(i => i.innerHTML);
    console.log(companyChineseNameArray[1])  
      })
      .catch((error) => {
        console.log(error);
      });
    })();
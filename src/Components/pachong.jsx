import {chineseNamePath, englishNamePath, addressPath, BACKEND_BASE_URI} from '../constants'


const axios = require('axios');
const chineseCharRegex = /\p{Unified_Ideograph}/u
/* 
NOTE: you need to go here and request access by clicking the button.
You can't try to fetch info from here directly because it
will send a CORS issue which is super annoying. So the fix
is to use a proxy server like the one below
*/
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const proxyLocalhostURL = "https://8080-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/"


// let companyChineseNameArray = [... document.querySelectorAll(chineseNamePath)]
// .map(i => i.innerHTML);
let companyEnglishNameArray = [... document.querySelectorAll(englishNamePath)]
.map(i => i.innerHTML);
let companyAddressArray = [... document.querySelectorAll(englishNamePath)]
.map(i => i.innerHTML);

//https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b

function Pachong(){
    (async () => {
        const args = process.argv.slice(2);
        const pageId = args[0] || 46;
        //http://lvcnn.com/list_group.php?id=46
        const url = `//lvcnn.com/list_group.php?id=${pageId}`
        axios.get(proxyurl + url)
        .then((response) => {
          console.log("Response: " + response.data)
          const parser = new DOMParser;
          const doc = parser.parseFromString(response.data, "text/html");
          console.log("Here is the html parsed" + doc)
          let companyChineseNameArray = [... doc.querySelectorAll("div.black_12_bold")]
          .map(i => i.innerHTML);
      console.log(companyChineseNameArray)  
        })
        .catch((error) => {
          console.log(error);
        });
      })();
}

  export default Pachong
import {chineseNamePath, englishNamePath, addressPath, BACKEND_BASE_URI} from '../constants'
import React from 'react';

const axios = require('axios');
const chineseCharRegex = /\p{Unified_Ideograph}/u
/* 
NOTE: you need to go here and request access by clicking the button.
You can't try to fetch info from here directly because it
will send a CORS issue which is super annoying. So the fix
is to use a proxy server like the one below
*/
//it seems I don't need to use the proxy now that I have cors setup in my express js.
//I will leave it here for reference...
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const proxyLocalhostURL = "https://8080-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/"


// let companyChineseNameArray = [... document.querySelectorAll(chineseNamePath)]
// .map(i => i.innerHTML);
let companyEnglishNameArray = [... document.querySelectorAll(englishNamePath)]
.map(i => i.innerHTML);
let companyAddressArray = [... document.querySelectorAll(englishNamePath)]
.map(i => i.innerHTML);

//https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b

function Pachong(){
  const [data, setData] = React.useState(null);
  const [urlToPost, setUrlToPost] = React.useState(null)
  const [scrapedObjects, setScrapedObjects] = React.useState(null)

  let urlObj = {url: `https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1`}

  //change between localhost and the gitpod url
  //https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/
  //this is only used for testing. I will delete it later.
  React.useEffect(() => {
    fetch("https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  React.useEffect(() => {
    axios.post("https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/api/scrape", urlObj)
    .then((response) => setScrapedObjects(response.data))
  }, [])

  return (
    <div className="pachong">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <p>{!scrapedObjects ? "Checking for data..." : scrapedObjects[1].COMPANY_CHINESE_FIELD_NAME}</p>
      </header>
    </div>
  );
}

  export default Pachong
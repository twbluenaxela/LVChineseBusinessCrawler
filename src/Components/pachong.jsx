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
  const [data, setData] = React.useState(null);
  const [myPost, setMyPost] = React.useState(null)
  const [urlToPost, setUrlToPost] = React.useState(null)
  const [scrapedObjects, setScrapedObjects] = React.useState(null)

  let testUrl = `https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1`
  let myStringTestUrl = "https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1"

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // React.useEffect(() => {
  //   const article = { title: 'React POST Request Example' };
  //   axios.post('https://reqres.in/api/articles', article)
  //       .then(response => setMyPost({ articleId: response.data.id }));
  // }, []);

  React.useEffect(() => {
    axios.post("http://localhost:3001/scrape", testUrl)
    .then((response) => setScrapedObjects(response.data))
  }, [])

  return (
    <div className="pachong">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <p>{!scrapedObjects ? "Checking for data..." : scrapedObjects}</p>
      </header>
    </div>
  );
}

  export default Pachong
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

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    const article = { title: 'React POST Request Example' };
    axios.post('https://reqres.in/api/articles', article)
        .then(response => setMyPost({ articleId: response.data.id }));
  }, []);

  return (
    <div className="pachong">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <p>{!myPost ? "Second loading..." : myPost.articleId}</p>
      </header>
    </div>
  );
}

  export default Pachong
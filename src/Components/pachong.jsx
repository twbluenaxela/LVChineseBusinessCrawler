// import {COMPANY_CHINESE_FIELD_NAME, COMPANY_ENGLISH_FIELD_NAME, ADDRESS_FIELD_NAME, PHONE_NUMBER_FIELD_NAME} from '../constants'
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

//https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b



function Pachong(){
  const [data, setData] = React.useState(null);
  const [urlToPost, setUrlToPost] = React.useState(null)
  const [scrapedObjects, setScrapedObjects] = React.useState(null)

  let dummyObj = [
    {
      COMPANY_CHINESE_FIELD_NAME: '聯合律師事務所',
      COMPANY_ENGLISH_FIELD_NAME: 'Parke Law Firm',
      ADDRESS_FIELD_NAME: '4455 S. Jones Blvd., #1 Las Vegas, NV 89103',
      PHONE_NUMBER_FIELD_NAME: '702-321-1187'
    }
  ]

  let urlObj = {url: `https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1`}

  //change between localhost and the gitpod url
  //https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/
  //this is only used for testing. I will delete it later.
  React.useEffect(() => {
    fetch("https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  // React.useEffect(() => {
  //   axios.post("https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/api/scrape", urlObj)
  //   .then((response) => setScrapedObjects(response.data))
  // }, [])

  React.useEffect(() => {
    getScrapedObjects(urlToPost)
  }, [urlToPost])

  function getScrapedObjects(url){
    axios.post("https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/api/scrape", {"url" : url})
    .then((response) => setScrapedObjects(response.data))
  }

  function handleSubmit(event){
    event.preventDefault()
    const submittedUrl = event.currentTarget.elements.urlInput.value
    setUrlToPost(submittedUrl)
  }


  return (
    <div className="pachong">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <form onSubmit={handleSubmit} >
          <label>LVCNN Crawler: 
            <br />
            <input type="url" id="urlInput" name="urlInput" placeholder='Enter url here...' />
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>
      <DynamicTable jsonData={!scrapedObjects ? dummyObj : scrapedObjects} />
    </div>
  );
}


function DynamicTable({jsonData}) {
  //get table columns
  const column = Object.keys(jsonData[0]);

  //table heading
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>
    })
  }

  //table row
  const tdData = () => {
    return jsonData.map((data) => {
      return(
        <tr>
          {
            column.map((v) => {
              return <td>{data[v]}</td>
            })
          }
        </tr>
      )
    })
  }

  return (
    <table className="table">
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>
        {tdData()}
      </tbody>
    </table>
  )
}

  export default Pachong
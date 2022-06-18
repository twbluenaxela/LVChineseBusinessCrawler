// import {COMPANY_CHINESE_FIELD_NAME, COMPANY_ENGLISH_FIELD_NAME, ADDRESS_FIELD_NAME, PHONE_NUMBER_FIELD_NAME} from '../constants'
import React from 'react';
const axios = require('axios');
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
  const [urlToPost, setUrlToPost] = React.useState("")
  const [scrapedObjects, setScrapedObjects] = React.useState({})
  const [apiTrigger,setTrigger] = React.useState(0);
  const [instructionsTrigger, setInstructionsTrigger] = React.useState(false)
  let dummyObj = [
    {
      COMPANY_CHINESE_FIELD_NAME: '聯合律師事務所',
      COMPANY_ENGLISH_FIELD_NAME: 'Parke Law Firm',
      ADDRESS_FIELD_NAME: '4455 S. Jones Blvd., #1 Las Vegas, NV 89103',
      PHONE_NUMBER_FIELD_NAME: '702-321-1187'
    }
  ]

  // let urlObj = {url: `https://www.lvcnn.com/list_group.php?id=166&shop_name=&cat=&page=1`}

  //change between localhost and the gitpod url
  //https://3001-twbluenaxel-lvchinesebu-dk524wi8o8z.ws-us47.gitpod.io/

  React.useEffect(() => {
    if(urlToPost){
      getScrapedObjects(urlToPost);
    }
  }, [apiTrigger])

  function getScrapedObjects(url){
    axios.post("/api/scrape", {"url" : url})
    .then((response) => setScrapedObjects(response.data))
  }

  function handleSubmit(event){
    event.preventDefault()
    const submittedUrl = event.currentTarget.elements.urlInput.value
    setUrlToPost(submittedUrl);
    setTrigger(+new Date());
  }

  function handleClickInstructions(event){
    event.preventDefault()
    setInstructionsTrigger(instructionsTrigger => !instructionsTrigger)
  }

  return (
    <div className="pachong">
      <header className="App-header">
        <div className='flex justify-start p-3 bg-sky-200 rounded-md drop-shadow-xl '>
          <h1 className="self-auto text-3xl font-bold hover:underline " >拉斯維加斯商業地區爬蟲🐛</h1>
          <button className='transition ease-in-out delay-150 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-indigo-500/50 duration-300' onClick={handleClickInstructions} >
            ❓
          </button>
        </div>
        {instructionsTrigger && <InstructionsPage />}
        <form onSubmit={handleSubmit} >
          <label>LVCNN Crawler: 
            <br />
            <input type="url" id="urlInput" name="urlInput" placeholder='Enter url here...' />
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>
      <DynamicTable jsonData={!scrapedObjects[0] ? dummyObj : scrapedObjects} />
    </div>
  );
}


function DynamicTable({jsonData}) {
  //get table columns
  const column = Object.keys(jsonData[0]);

  //table heading
  const ThData = () => {
    return column.map((data) => {
      return <th className="border border-green-400 bg-green-300 " key={data} >{data}</th>
    })
  }

  //table row
  const tdData = () => {
    return jsonData.map((data) => {
      return(
        <tr>
          {
            column.map((v) => {
              return <td className='border border-green-200 bg-green-100' >{data[v]}</td>
            })
          }
        </tr>
      )
    })
  }

  return (
    <table className="border-separate border-spacing-x-2">
      <thead >
        <tr>{ThData()}</tr>
      </thead>
      <tbody>
        {tdData()}
      </tbody>
    </table>
  )
}

function InstructionsPage(){

  return(
    <div>
      <h2>使用説明 Instructions</h2>
      <p className="" >先訪問這個網站 First visit this website
        <a href="https://www.lvcnn.com/list.php" target="_blank" > LVCNN </a>
      </p>
      <p>然後點擊一個類型(如:廣告設計)Then choose a category (ex: Advertising) </p>
      <p>然後把上面的網址複製一下，之後可以粘貼到下面的輸入框框裏面</p>
      <p className='text-blue-400 font-extrabold'>Then copy the url at the top, and put it in the input box below</p>
    </div>
  )
}


  export default Pachong
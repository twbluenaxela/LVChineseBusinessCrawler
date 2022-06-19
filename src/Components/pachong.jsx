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


// let lvcnnCategories = document.querySelectorAll("td > a[href^='list_group.php?id']")



function Pachong(){
  const [urlToPost, setUrlToPost] = React.useState("")
  const [scrapedObjects, setScrapedObjects] = React.useState({})
  const [apiTrigger,setTrigger] = React.useState(0);
  const [instructionsTrigger, setInstructionsTrigger] = React.useState(false)
  const [categories, setCategories] = React.useState(() => {
    const initialCategory = fetchCategories()
    return (initialCategory)
  })
 

  let dummyObj = [
    {
      "中文店名 Chinese": '聯合律師事務所',
      "English Name": 'Parke Law Firm',
      "地址 Address": '4455 S. Jones Blvd., #1 Las Vegas, NV 89103',
      "電話號碼 Phone Number": '702-321-1187'
    }
  ]

  React.useEffect(() => {
    if(urlToPost){
      getScrapedObjects(urlToPost);
    }
  }, [apiTrigger])

  function fetchCategories() {
    const categoriesPageUrl = "https://www.lvcnn.com/list.php"
    axios
    .post("/api/category", {"url" : categoriesPageUrl})
    .then((response) => {
      // console.log(response.data)
      setCategories(response.data)
    })
  }

  function getScrapedObjects(url){
    axios
    .post("/api/scrape", {"url" : url})
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
        <div className='flex justify-start p-3 bg-sky-200 rounded-md mb-3 shadow-lg '>
          <h1 className="self-auto text-3xl font-bold hover:underline " >拉斯維加斯商業地區爬蟲🐛</h1>
          <button className='transition ease-in-out delay-150 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-indigo-500/50 duration-300' onClick={handleClickInstructions} >
            🙍🏻‍♀️❓
          </button>
        </div>
        {instructionsTrigger && <InstructionsPage />}
        {categories && <CategorySelector categories={categories} setUrlToPost={setUrlToPost} setTrigger={setTrigger} /> }
        <form onSubmit={handleSubmit} className="mb-4" >
          <label><a href="https://www.lvcnn.com/list.php" target="_blank" className='font-extrabold underline' >LVCNN</a> Crawler:
            <br />
            <input className='outline outline-offset-2 outline-sky-200 rounded-sm shadow-inner ' type="url" id="urlInput" name="urlInput" placeholder='Enter url here...' />
          </label>
          <button className='ring ring-offset-2 ring-blue-500 bg-slate-400 rounded-sm ml-2 ' type="submit">Submit</button>
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
              return <td className='border border-green-200 bg-green-100' >{data[v].replace(/[&]amp[;]/gi,"&")}</td>
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
    <div className='bg-amber-100 p-3 mt-3 mb-3 shadow-md transition-all duration-200' >
      <h2 className='text-xl font-bold'>使用説明 Instructions</h2>
      <ul className="list-disc list-inside">
        <li className='font-medium'>先訪問這個網站 First visit this website
          <a href="https://www.lvcnn.com/list.php" target="_blank" className='font-extrabold underline decoration-amber-300' > LVCNN</a>
        </li>
        <li className='font-medium'>然後點擊一個類型(如:廣告設計)Then choose a category (ex: Advertising)</li>
        <li className='font-medium'>然後把上面的網址複製一下，之後可以粘貼到下面的輸入框框裏面</li>
        <li className='font-medium'>Then copy the url at the top, and put it in the input box below</li>
        <li className='font-medium'></li>
      </ul>
      <h2 className='text-xl font-bold'>選擇類型</h2>
      <ul className="list-disc list-inside">
        <li className='font-medium'>您也可以嘗試直接選擇一個類型。選擇之後，會馬上給你打出一個表格。</li>
      </ul>
    </div>
  )
}

function CategorySelector({categories, setUrlToPost, setTrigger}) {
  // console.log("I am alive!")
  const CategoryOptions = () => {
    return categories.map((item) => {
      /*
      So ideally I could format the english name in the backend when its being fetched and thrown into an array
      For some reason that works with the chinese name and removing of <br>
      However when this is thrown back into the front end, it gets automatically converted to html again and that's
      what I'm sifting through. &amp; will be there by default no matter what I do. Unless of course, I handle it back
      here, when it's not html, but just a string in an object.
      */
      return <option value={item.CATEGORY_PAGE_LINK} name={item.CATEGORY_CHINESE_NAME} id={item.CATEGORY_CHINESE_NAME} >{item.CATEGORY_CHINESE_NAME + " " + item.CATEGORY_ENGLISH_NAME.replace(/[&]amp[;]/gi,"&")}</option>
    })
  }

  // const handleFormSubmit = (event) => {
  //   const urlToSubmit = event.target.value
  //   console.log(urlToSubmit)
  // }

  const handleChange = (event) => {
    const currentSelectedOption = event.target.value
    console.log("This is what you selected: ")
    console.log(currentSelectedOption)
    setUrlToPost("https://www.lvcnn.com/" + currentSelectedOption)
    setTrigger(+new Date());
  }

  return(
    <div className='w-full md:w-auto'>
        <h1 className='text-xl font-bold'>請選擇要搜尋的類型</h1>
        <select id="chooseCategory" onChange={handleChange} className="outline outline-4 outline-offset-2 outline-blue-300" >
        {CategoryOptions()}
        </select>
    </div>
  )
}


  export default Pachong
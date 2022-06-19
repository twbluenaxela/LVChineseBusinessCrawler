const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const categoryScraper = (url) => {

    return axios
      .get(url)
      .then((response) => {
        const dom = new JSDOM(response.data);
        let categoryList = [
          ...dom.window.document.querySelectorAll(
            "td > a[href^='list_group.php?id']"
          ),
        ].map(i => ({
            CATEGORY_CHINESE_NAME : i.querySelector("h3").innerHTML,
            CATEGORY_ENGLISH_NAME : i.querySelector("h5").innerHTML,
            CATEGORY_PAGE_LINK : i.href
        }))

        // console.log("Here are the categories!");

        return (categoryList);
      })
      .catch((error) => {
        console.log(error);
      });

}

exports.categoryScraper = categoryScraper;
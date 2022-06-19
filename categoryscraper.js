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
        ];
        //only give back the ones with Chinese names.
        // .filter(i => chineseRegex.test(i))

        console.log("Here are the categories!");
        console.log(categoryList[0]);
        return (categoryList);
      })
      .catch((error) => {
        console.log(error);
      });

}

exports.categoryScraper = categoryScraper;
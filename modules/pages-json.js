import fs from "fs"
import path from "path";
const axios = require("axios");

export default async function asyncModule() {
  try {
    const { data } = await axios(
      "http://localhost:9009/wp-json/wp/v2/pages/"
    );
    for (let page of data) {
      let pageFE ={
        title: page.title.rendered,
        slug: page.slug,
        description: page.content.rendered
      }
      fs.writeFileSync("./content/"+page.slug+".json", JSON.stringify(pageFE));
    }
  } catch (err) {
    console.log(err);
  }
}
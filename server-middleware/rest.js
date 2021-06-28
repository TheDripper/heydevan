const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs-extra");
const path = require("path");
const util = require("util");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all("/page/:id", async (req, res) => {
  try {
    let pageId = req.params.id;
    console.log('page id',pageId);
    const { data } = await axios(
      "http://localhost:9009/wp-json/wp/v2/pages/" + pageId
    );
    let pageFE = {
      title: page.title.rendered,
      slug: page.slug,
      description: page.content.rendered
    };
    res.json({ data: { pageFE } });
  } catch (err) {
    console.log(err);
  }
});
module.exports = app;

const express = require("express");
const hbs = require("hbs");

var app = express();
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home.hbs", {
    title: "صفحه اصلی",
    message: "به سایت ما خوش آمدید"
  });
});
app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "درباره ما",
    message: "اطلاعات درباره سایت ما"
  });
});
app.listen(5000);

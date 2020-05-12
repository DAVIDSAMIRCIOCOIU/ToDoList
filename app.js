// MODULE REQUESTS
const express = require("express");
const bodyParser = require("body-parser");
// Initializing app
const app = express();
// USE AND SET
// We need to set ejs in order to use it in the app
app.set("view engine", "ejs");
// App uses body parser
app.use(bodyParser.urlencoded({extended: true}));
// SET THE PUBLIC FOLDER in order to use static files (js, css, images or ejs): package.json loads only app.js and view folder
app.use(express.static("public"));

// Port handling
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
// Arrays for different lists
var items = ["Buy Food", "Eat Food", "Cook Food"];
let workItems = [];

app.get("/", (req, res) => {
    // Check for day of the week: 0 = sunday; 6 = saturday (weeks start at 0)
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    // rendering the list.ejs file inside the views folder and passing the keys as params
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req, res) => {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work"); // we basically ask for a get request
    } else {
        items.push(item);
        res.redirect("/"); // we basically ask for a get request
    }
});

app.get("/work", (req,res) => {
    res.render("list", {listTitle: "Work", newListItems: workItems});
});

app.get("/about", (req, res) => {
    res.render("about");
});

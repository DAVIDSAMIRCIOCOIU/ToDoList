// MODULE REQUESTS
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

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
const items = ["Buy Food", "Eat Food", "Cook Food"];
const workItems = [];

app.get("/", (req, res) => {
    
    const day = date.getDate();
    // rendering the list.ejs file inside the views folder and passing the keys as params
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req, res) => {

    const item = req.body.newItem;

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

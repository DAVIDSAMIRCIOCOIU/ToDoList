const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// We need to set ejs in order to use it in the app
app.set("view engine", "ejs");
// App uses body parser
app.use(bodyParser.urlencoded({extended: true}));
// SET THE PUBLIC FOLDER
app.use(express.static("public"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});

var items = ["Buy Food", "Eat Food", "Cook Food"];

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
    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/"); // we basically ask for a get request
});


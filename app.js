const express = require('express');
const bp = require('body-parser');
//Requring a local module
const date = require(__dirname + "/date.js")

const app = express();



const items = ["Wake up", "Get Refreshed", "Have Breakfast"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bp.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {

    //We will create a new date module and will import the module in the app :)
    let day = date.getDate();
    res.render("list", { ListTitle: day, newItem: items });
});


app.post("/", (req, res) => {
    const item = req.body.next;

    // console.log(item);
    //var items.push(item);
    // res.send(name);

    console.log(req.body);
    if (req.body.buttonValue === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    //------------- Very important to note that there cannot be a
    //--------------a res.render in a post req, instead call it in at 
    //--------------res.get, and redirect from res.post()------------//

    //--------------THIS IS WRONG XXXXXXXXX app.render('list', { newItem: item });------------------///


    ///But remember we now have to define the local var "item" ---
    // Thus simple soln is make the scope of item global


});

app.get("/work", (req, res) => {
    res.render("list", { ListTitle: "Work List", newItem: workItems });
});
app.post("/work", (req, res) => {
    let item = req.body.next;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about", (req, res) => {
    res.render("about");
})


app.listen(process.env.PORT || 3000, () => {

    console.log("Server is listening on port 3000");
});
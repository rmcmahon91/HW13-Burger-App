var burger = require("../Models/burgers")
function burgerController(app){
app.get("/",function(req,res){
    burger.selectAll(function(data){
        res.render("index",{burgers: data})
    })
})

app.post("/api/burgers", function(req,res){
    var newBurger = req.body.burger_name
burger.insertOne(newBurger,function(data){
    res.json(data)
})
})
app.put("/api/burgers", function(req,res){
    var getId = req.body.id
    burger.updateOne(getId, function(data){
        res.json(data)
    })
})
}

module.exports = burgerController
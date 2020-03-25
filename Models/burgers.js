var orm = require("../Config/orm")
var burger = {
  selectAll: function(cbController){
      orm.selectAll("burgers",function(data){
        cbController(data)
      })
  },
  insertOne: function(newBurger,cbController){
    orm.insertOne("burgers",[
      "burger_name","devoured"
    ],[newBurger,false],function(data){
      cbController(data)
    })
  },
updateOne: function(getId, cbController){
  orm.updateOne("burgers",["devoured","id"],[true,getId],function(data){
    cbController(data)
  })
}
  
}

module.exports = burger
var connection = require("./connection")
 
var orm = {
    selectAll: function(tableName,cbModel){
        connection.query("select * from ??", tableName,function(err,data){
            cbModel(data)
        })
    },
    insertOne: function(tableName,columnNames,values,cbModel){
        connection.query("insert into ?? (??,??)values(?,?)",
        [tableName,columnNames[0],columnNames[1],values[0],values[1]],
        function(err,data){
            cbModel(data)
        })
    },
    updateOne: function(tableName, columnNames, values, cbModel){
        connection.query("update ?? set ??=? where ??=?",[tableName,columnNames[0],values[0],columnNames[1], values[1]],function(err,data){
            cbModel(data)
        })
    }
}
// orm.selectAll()
// orm.insertOne()
// orm.updateOne()

module.exports = orm
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";
//we can also use mongodb atlas
//var url = "mongodb+srv://youshare:youshare1234@cluster0.h0zbmwm.mongodb.net/int222?retryWrites=true&w=majority"

MongoClient.connect(url, { useUnifiedTopology: true}, function(err, db){
    if(err) throw err;
    var dbo = db.db("student");
    dbo.createCollection("exam_results", function(err, res){
        if(err) throw err;
        console.log("Collection Cretated");
        db.close();
    })
});
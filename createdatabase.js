var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student"
//we can also use mongodb atlas
//var url = "mongodb+srv://youshare:youshare1234@cluster0.h0zbmwm.mongodb.net/youshare?retryWrites=true&w=majority"
MongoClient.connect(url, { useUnifiedTopology: true}, function(err, db){
    if(err) throw err;
    console.log("Database Connected");
    db.close();
});


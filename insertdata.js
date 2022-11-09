var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true}, function(err, db){
    if(err) throw err;
    var dbo = db.db("student");
    var myobj = [
    {name:"ramana", course:"int222",marks:78},
    {name:"ram", course:"int222",marks:87},
    {name:"ramanareddy", course:"int222",marks:88},
    {name:"rams", course:"int222",marks:98}
];
    dbo.collection("exam_results").insertMany(myobj, function(err, data){
        if(err) throw err;
        console.log("Number of documents inserted are:" + data.insertedCount);
        db.close();
    });
    
});
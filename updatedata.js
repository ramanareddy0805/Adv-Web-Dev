var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true}, function(err, db){
    if(err) throw err;
    var dbo = db.db("student");
   var request = {course:"int222"};
   var updatedata = { $set: {course:"Web Dev"}};
   //update one for updating one document i.e row
   //updatemany to update all
   dbo.collection("exam_results").updateMany(request, updatedata, function(err, data){
    if(err) throw err;
    console.log("data updated successfully.")
    db.close();
   });
    
});
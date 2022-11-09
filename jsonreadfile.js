const fs = require('fs');
fs.readFile('json.json',function(err,data) {
    //also we can use
    // fs.readFile('json.json',(err,data) =>{})
    //instead of function
    if(err) throw err;
    let a = JSON.parse(data);
    console.log(JSON.stringify(a,null,10));
    console.log(a);
    console.log(typeof a.gender);
    console.log(typeof a);
})
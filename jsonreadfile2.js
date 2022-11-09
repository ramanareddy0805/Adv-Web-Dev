//wrting to a json file
const fs = require('fs');
let a = {
    "name":"Ram",
    "gender":"Male",
    "Age":"20"  
}
let data = JSON.stringify(a,null,10);
fs.writeFile('b.json',data,(err) => {
    if(err) throw error;
    console.log("The data is inserted");
})

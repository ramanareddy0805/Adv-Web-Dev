//the following is not a valid json format
//it is a jscript object notation
const a ={
    "name":"Ramana",
    "age":"20",
    "College":"Lpu"

}
const b = JSON.stringify(a); //converting to a valid json format
console.log(b)
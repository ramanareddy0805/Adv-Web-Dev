const express = require("express")
const app = express();
const { check, validationResult, oneOf } = require('express-validator');
var fs = require('fs');
app.use(express.urlencoded());
app.get('/', function (req, res) {
res.sendFile( __dirname + "/" + "validator form.html" );
})
app.post('/saveData', [
check('name').isAlpha().withMessage('Must be alpha ony').isLength({ min: 10, max: 20 }).withMessage('Name length should be 10 to 20 characters'),
check('email').isEmail().isLength({ min: 10, max: 30 }).withMessage('Email length should be 10 to 30 characters'),
check('mobile').isLength({ min: 10, max: 10 }). withMessage('Mobile number should contains 10 digits'),
check('password').isLength({ min: 8, max: 10 }).withMessage('Password length should be 8 to 10 characters'),
oneOf([
check('gender').isIn(['male', 'female']).withMessage('Gender is required')]),
], function(req, res) {
const errors = validationResult(req);
if (!errors.isEmpty()) {
res.send(errors)
}
else {
response = {
email:req.body.email,
name:req.body.name,
mobile: req.body.mobile,
password:req.body.password,
gender:req.body.gender
};
let data = JSON.stringify(response, null, 2);
fs.writeFile('test.txt', data, function () {
console.log('Write operation complete.');
});
res.end("successfully submitted");
}
});
app.listen(2000, function (error) {
if (error) throw error
console.log("Server created Successfully");
})
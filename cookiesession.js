var express = require('express')
var cookieSession = require('cookie-session')
var app = express()
    app.use(cookieSession({
    name: 'session',
    keys: ['key1','key2']
}))
app.use(function(req,res,next){ //setting a time limit for the server
    req.sessionOptions.maxAge=20;
    next();
});
app.get('/',function(req, res,next){
    if(req.session.views){
        req.session.views++;
        res.send("No of Visits: " + req.session.views);
    }
    else{
        req.session.views = 1;
        res.send("No of Visits: " + req.session.views);
}})
app.listen(2000)
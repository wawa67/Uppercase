const uppercase = require('../util/uppercase');
module.exports = {
    mostra(res,req){
    let {text} = res.body;
    text = uppercase(text);
    req.json({message: text});
}};
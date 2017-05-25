module.exports = {
    commitConfiguration : function(req, res){
       //handle connection to db & commit logic here
         let content = req.body;
        console.log(content);
        res.json(content);
    }
}
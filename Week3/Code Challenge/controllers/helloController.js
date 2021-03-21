class HelloController {
    get(req, res) {
        if(req.params.name == "fikri" || req.params.name == "Fikri"){
            res.send(`Fikri Aulia Parlindungan Lubis`);
        } else {
            res.send(`Error : Name not defined!`);
        }
    }
    
    post(req, res) {
        if(req.params.name == "fikri" || req.params.name == "Fikri"){
            res.send(`Fikri Aulia Parlindungan Lubis`);
        } else {
            res.send(`Error : Name not defined!`);
        }
    }
    
    put(req, res) {
        if(req.params.name == "fikri" || req.params.name == "Fikri"){
            res.send(`Fikri Aulia Parlindungan Lubis`);
        } else {
            res.send(`Error : Name not defined!`);
        }
    }
    
    delete(req, res) {
        if(req.params.name == "fikri" || req.params.name == "Fikri"){
            res.send(`Fikri Aulia Parlindungan Lubis`);
        } else {
            res.send(`Error : Name not defined!`);
        }
    }
}

module.exports = new HelloController();
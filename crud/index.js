//https://stackoverflow.com/questions/9177049/express-js-req-body-undefined

var express = require("express");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

var tasks = []
var aux=[]
var surrogatekey =1;
//para evitar CORS
app.use((req,res,next)=>{

    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){

        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        res.status(200).json({});
    }
    next();

});



//para id
app.get('/tasks/:taskId',(req, res,next)=>{
    aux=tasks[req.params.taskId-1];
    res.json(aux);
});
//creacion
app.post("/tasks", jsonParser, (req, res, next) => {
    req.body.id = surrogatekey++;
    tasks.push(req.body);
    res.send("OK");
});
//get para todos
app.get("/tasks", (req, res, next) => {
    res.json(tasks);
});
//borrar un task por id

app.delete("/tasks/:taskId",(req, res)=> {
    const { id } = req.params;
    const deleted = tasks.find(tasks => tasks.id == id);

    if(deleted)
    {
        console.log(deleted);
        tasks = tasks.filter(tasks => tasks.id != id);
        res.status(200).json(deleted);
    }else{
        console.log(deleted)
        res
        .status(404)
        .json({message: "Channel you are looking for does not exist"});
    }
});
//actualizar datos
app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    
    const index = tasks.findIndex(tasks => taskId == id);

    if(index != -1)
    {
        tasks[index] = tasks;
        res.status(200).json(tasks[index]);
    }else{
        res.status(404).json({message: "task does not exist"});
    }
});

app.listen(3000, () => {
    console.log("Servidor HTTP funcionando");
});
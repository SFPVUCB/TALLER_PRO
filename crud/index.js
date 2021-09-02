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

app.delete('/tasks/:taskId', function (req, res) {
    var idTask = parseInt(req.params.taskId);
    tasks.forEach(function(value,index,array){
        if(value.id==idTask){
            tasks.splice(index,1);
        }
    });
    res.send("Se elimino la tarea");
});
//actualizar datos
app.put('/task/update/:taskId',jsonParser,(req,res)=>{
    let taskId = req.params.taskId;
    console.log(taskId)
    function editarEstado(taskId){
        tasks.forEach(function(currentValue,index,arr)
        {
            if(tasks[index].id==taskId)
            {
                tasks[index].title=req.body.title
                tasks[index].detail=req.body.detail
                tasks[index].status=req.body.status
                res.json("{Cambio realizado con exito}");
            }
            else
            {
                res.json("{sin exito}");

            }
        }
        );
        
    
    }
    editarEstado(taskId)
});

app.listen(3000, () => {
    console.log("Servidor HTTP funcionando");
});
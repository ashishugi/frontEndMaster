import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';    
import { debugPort } from 'process';


const app = express();
//middle ware

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(morgan('dev'));

const db=[];

//routes
app.post('/todo',(req,res)=>{
    const newTodo = {
        id:Date.now(),
        text:req.body.text
    }
    db.push(newTodo);
    res.json((newTodo));
})

app.get('/todo',(req,res)=>{
    res.json(db);
})
//dynamic routes
app.get('/todo/:id',(req,res)=>{
    const todo = db.find((x)=>{
        console.log(req.params.id)
        return x.id === +req.params.id;
    })
    res.json({data:todo});
})


app.listen(8000,()=>{
    console.log('server running on port 8000')
})
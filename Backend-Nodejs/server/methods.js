const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.send('Hello World')
})
app.listen(3007);


const authRouter = express.Router();
app.use('/auth',authRouter);

authRouter.route('/signup')
.get(getSignUp)
.post(postSignUp);

function getSignUp(req,res){
    res.sendFile('/public/index.html',{root:__dirname});
}
function postSignUp(req,res){
    let obj = req.body;
    console.log("backend",obj,req.body);
    res.json({
        message:"user signed up",
        data:obj,
    });
}
// user
const userRouter = express.Router();
app.use('/user',userRouter);

const user =[
    {
        id:1,
        name:"aditya"
    },
    {
        id:2,
        name:"2 - aditya"
    },{
        id:3,
        name:"3 - aditya"
    },{
        id:4,
        name:"4 - aditya"
    },
]

// =>  /user/
userRouter.route('/')
.get(getAllUsers)
.post()
.patch()

// => /user/id
// userRouter.route("/:id").get(getUserById);


function getAllUsers (req,res){
    console.log("called here");
    console.log(req.body)
    res.json({
        message:"called",
        data:user
    })
}
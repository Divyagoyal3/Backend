import express from 'express'; 
// modules

const app = express();

// middlewares : function btwn req and response
app.use(express.static('dist'));


// request to be send to server
app.get('/',(req,res)=>{
  res.send("hlo, Server is ready");
});

// app.use(express.json());        // parse JSON body
// app.use(express.urlencoded({ extended: true })); // parse form data
// app.use(express.static("public"));  serve static files

//  get 5 jokes

app.get('/api/jokes',(req,res) =>{
 const jokes =[ 
    {
    id: 1,
    title: 'A joke',
    content : 'This is a joke'
    },
    {
    id: 2,
    title: 'Author joke',
    content : 'This is authors joke'
    },
    {
    id: 3,
    title: 'Another  third joke',
    content : 'This is another joke'
    },
    {
    id: 4,
    title: 'fourth joke',
    content : 'This is fourth class joke'
    },
    {
    id: 5,
    title: 'fifth joke',
    content : 'This is a fifth joke'
    },
];
res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`);

});
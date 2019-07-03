const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const io = require('socket.io')();
const  app  =  express();
const port = 8000;
const cors = require('cors');
const token = require('./config_video/token_key')
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use(cors());


app.get("/", (req,res) => {
    res.send("youhou");
 })
 
 app.get('/video',(req,res)=>{

  res.json({
     token
  })


});
  
 
 //je lance le serveur node

app.get('/video',(req,res)=>{

 res.json({
    token
 })
});

app.post('/post-playlist',(req,res) =>{
  const playlist = req.body
  console.log(playlist.id)
  console.log(playlist.name)
  if(playlist.id == playlist.name){
    res.json({match : "matched"})
  }

})


io.on('connection', socket => {
   console.log('User connected')

   socket.on('test', (test) => {
       console.log('test', test)
       io.emit("test",test)
   })
 })
 const server = app.listen( process.env.PORT  ||  4000, function(){
  console.log('Listening on port '  +  server.address().port);
});

io.listen(port);
console.log('listening on port ', port);;


 const server = app.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});





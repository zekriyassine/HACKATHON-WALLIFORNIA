const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const io = require('socket.io')();
const  app  =  express(); 
const port = 8000;

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.get("/", (req,res) => {
    res.send("youhou");
 })
 
 
 //je lance le serveur node


 io.on('connection', socket => {
    console.log('User connected')
    
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })

    socket.on('test', (test) => {
        console.log('test', test)
        io.emit("test",test)
    })
  })
app.post('/post-playlist',(err,res) =>{
    const playlist = req.body

    

})
 
 io.listen(port);
 console.log('listening on port ', port);;


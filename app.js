const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/'+ 'index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const exp = require('express');
const mongoose = require('mongoose');
const emprouter = require('./router/emprouter');

//const cookie = require('cookie-parser');
const cors = require('cors');

const app = exp();
port = 8000; 
app.use(exp.json());

//  app.use(cookie());
 app.use(cors({
     origin:"http://localhost:5173",
    methods:["GET","PUT","POST","PATCH","DELETE"],
    credentials:true,

 }));

app.use('/employee',emprouter);



// app.listen(port, () => {
//     console.log("Server Running");
// });

// mongoose.connect('mongodb+srv://prinkaleo124:qs5enFvfUEaV5TMi@cluster0.adpml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res) => {
//     console.log("Successful");
//     app.listen(port, () => {
//         console.log("Server Running");
//     });
// }).catch((err) => {
//     console.log(err);
   
//});

mongoose.connect("mongodb://localhost:27017/").then((res) => {
    console.log("Successful");
    app.listen(port, () => {
        
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err);
   
});
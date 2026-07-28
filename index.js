import express from 'express';

const PORT = 8181;
const app = express();

app.get("/",(req,res)=>{
   return res.send("Hello World");
});

app.listen(PORT,(req,res)=>{
    console.log(`server running on ${PORT}`);
})
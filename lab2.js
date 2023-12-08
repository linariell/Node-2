const express=require("express");
const app=express();

app.use(express.static(__dirname));
app.use("/",function(request,response) {
    response.sendFile("index.html")
});
//app.get("/",function(request,response) {response.render("C:\\Users\\pvitk\\Desktop\\школа\\3курс\\Вебы\\expressapp\\home.hbs");})
app.listen(3000);
console.log('Сервер работает');
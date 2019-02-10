
const express=require("express");
const hbs=require('hbs');

const app=express();

hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine' , 'hbs');

app.use((req,res,next)=>{
    res.render('err.hbs');
})

// app.use('/about',(req,res,next)=>{
//     res.render('err.hbs');
// })

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
})

app.get('/',(req,res)=>{
    res.render("home.hbs",{
        pageTitle:'Home Page'
    });
})
app.get('/about',(req,res)=>{
    res.render("about.hbs",{
        pageTitle:'About Page'
    })
})

app.listen(3000 , ()=>{
    console.log('server is up on port 3000')
});
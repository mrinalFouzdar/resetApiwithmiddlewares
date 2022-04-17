const express = require("express")

const app = express()

const booksName=[
    {
        name:"GameOfThrones",
    },
    {
        name:"HarryPotter"
    }
]


app.use((req,res,next)=>{
    console.log("global middlewares")
    next()
})

app.get("/",(req,res,next)=>{
  console.log("book")

})


app.get("/books",(req,res,next)=>{
    console.log ( "Fetching all books")
    res.send(booksName)
    // next();

})

app.get("/book/:name",(req,res,next)=>{
    console.log(req.params.name)
    const name = req.params.name;
    if(name){
      const  book=booksName.find((book) => book.name === name)
    //   console.log(book)
      res.json(book)
    }
    // next()

})

app.listen(8000,()=>{
    console.log("listening port at 8000")
})
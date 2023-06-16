const App = require("./app");

const dotenv = require("dotenv")

App.listen(process.env.PORT, () =>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
})
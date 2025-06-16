const express = require("express");

const app = express();

app.use("/", (err, req, res,next)=> {
    if(err){
        res.status(500).send("Something went wrong");
    }
})


app.get("/getUserData",(req,res)=> {
    // logic of db call

    try {
        throw new Error("WRONG")

    res.send("User Data Sent");
    } catch (error) {
        res.status(500).send("Some Error ")
    }
    
})


 
app.listen(7777, () => {
    console.log("Server is running")
})



























































// let name = {
//     firstName : "Ankush",
//     lastName : "Singh",

// }

//  let printFullName = function (hometown,city) {
//         console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + city)
//     }

// // name.printFullName();

// let name2 = {
//     firstName:"Sachin",
//     lastName:"Tendulkar",
// }

// // function borrowing 
// // -> call method is used to invoke a function directly by pasising in the reference which points to the this variable
// //inside the method. Apply is same as call 
// // -> the only difference in call and apply method is the way we pass the arguments
// // -> first argument is the refrence to the this variable and second is that we pass a list of arguments
// printFullName.call(name,"Kot","Hamirpur");
// printFullName.apply(name2,["Tauni Devi", "Hamirpur"]);

// let printMyName = printFullName.bind(name2,"Tauni Devi", "Hamirpur");
// console.log("printMyName",printMyName)
// printMyName();

// // bind method looks similar to the call method, but instead of directly calling the method the bindmethods binds the mehod
// // with a object and returns us the copy 







app.use("/user",
    (req, res, next) => {
        //request handler 
        console.log("Handler 1")
        res.send("response handler 1 ")
        // next()
    },
    (req, res) => {
        console.log("Handler 2")
        res.send("response handler 2 ")

    }
)


app.listen(3000, () => {
    console.log("Server Started")
})


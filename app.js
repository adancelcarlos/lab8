const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js


//routes
app.get("/", function(req, res){
    
    //console.log(req.query.q1);
    // let score = 0;
    // let f1, f2, f3, f4, f5;
    // f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    // if (req.query.q1.toLowerCase() == "sacramento") {
    //     score += 20;
    //     f1 = "You got it!";
    // }
    //res.render("index", {"score": score, "feedback1":f1});
    
    //TODO: shuffle the array
    let q3Choices = ["Maine", "Nevada", "Rhode Island", "Florida"];
    
    res.render("index", {"q3Choices":q3Choices});
    
} );


app.get("/gradeQuiz", function(req,res){
    
    //console.log(req.query.q1);
    let score = 0;
    let f1, f2, f3, f4, f5;
    f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 20;
        f1 = "Right!";
    }
    if (req.query.q2 == "mo") {
        score += 20;
        f2 = "Right!";
    }
    if (req.query.q3a=="false" && req.query.q3b=="false"
     && req.query.q3c=="true" && req.query.q3d=="true" ) {
        score += 20;
        f3 = "Right!";
    }
    if (req.query.q4 == "Rhode Island") {
        score += 20;
        f4 = "Right!";
    }
   if (req.query.q5 == "seal2") {
        score += 20;
        f5 = "Right!";
    } 
    if (req.query.q6 == 50) {
        score += 12.5;
        f6 = "Right!";
    }
   if (req.query.q7 == "Dollars") {
        score += 12.5;
        f7 = "Right!";
    }
   if (req.query.q8 == "Austin") {
        score += 12.5;
        f8 = "Right!";
    }
    
    
    
    res.send( {
        "score": score,"fback1":f1,"fback2":f2,"fback3":f3,"fback4":f4,"fback5":f5,"fback6":f6,"fback7":f7,"fback8":f8
    });
    
    
    
    //res.send( {"score": score, "feedback":[{"fback":f1}, {"fback":f2}, {"fback":f3}, {"fback":f4}, {"fback":f5}]});
    
    
});


//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})

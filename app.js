const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js


//routes
app.get("/", function(req, res){
    
    res.render("index.ejs");
    
} );


app.get("/gradeQuiz", function(req,res){
    
    let score = 0;
    let f1, f2, f3, f4, f5, f6, f7, f8;
    f1 = f2 = f3 = f4 = f5 = f6 = f7 = f8 = "Wrong!";
    
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
        "score": score,
        "fback1":f1,
        "fback2":f2,
        "fback3":f3,
        "fback4":f4,
        "fback5":f5,
        "fback6":f6,
        "fback7":f7,
        "fback8":f8
    });
    
        
    
});


//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})

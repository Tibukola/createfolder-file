const express = require("express");
const app = express();
const port = 8080;
const {mkdirSync, appendFileSync, existsSync, readFileSync} = require("fs");

app.get("/generate", async function (req, res) {
    const data = readFileSync("bunny.mp4");
    console.log(data);
    const existing = existsSync("myfolder");
    if (!existing) {
        mkdirSync("myfolder", (err) =>{
        if (err) {
            console.log(err);
            return res.status(400).json({message: "error creating folder", error: err.code});
        }
    });
}
    appendFileSync(`./myfolder/mountzion-${Date.now()}.mp4`, "this is an assignment file", (err) =>{
      if (err)  return res.status(400).json({message:"error creating file", error:err});
        });
        console.log(this.performance.nodeTiming.duration);
    return res.status(201).json({message: "folder created succesfully"});
});

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
});
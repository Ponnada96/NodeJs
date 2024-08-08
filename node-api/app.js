const express = require("express");
const app = express();

const getUser = async () => {
    const promise = new Promise((resolve, resject) => {
        setTimeout(() => {
            resolve("Data fetched successfully")
        }, 5000)
    })
    return promise;
}

app.get("/user", async (req, res) => {
    const response = await getUser();
    res.status(200).send(response);
});

app.listen(3000, () => console.log("http://localhost:3000"));
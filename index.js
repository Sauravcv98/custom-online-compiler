const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.json({hello:"world"});
})

app.listen(8082, () => {
    console.log("Started listening on port 8082");
});
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


// Serve the static files from the React app
app.use(express.static(__dirname));

// Handles any requests that don't match the ones above
app.get('/', (req, res) =>{
    res.render('/build/index');
});

app.listen(PORT, () =>{
    console.log("Server running");
});






// const {Console } = require('console');
// const http = require ('http');

// const port = 8080;


// function requestHandler( req, res){

//     // Console.log(req.url);

//     res.end("Hi! Dhitosh");
// }

// const server = http.createServer(requestHandler);

// server.listen(port, function(err){

//     if (err){

//         console.log(err);
//         return;
//     }


//     console.log("server is running on port:  ", port);


// });

const http = require ('http');
const port = 8000;


const server = http.createServer ();

server.listen(port, function(err){

    if (err){

        console.log(err);
        return;
    }

    console.log("server is running on port : ", port );
    
});
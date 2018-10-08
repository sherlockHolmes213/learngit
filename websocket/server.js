var myConnection = require('./mysql')

var WebSocketServer = require('ws').Server
wss = new WebSocketServer({port:8181})
myConnection.connect()
wss.on('connection', function (ws) {
    console.log(ws,"ws")
    // ws.on('open',function(message){
    //     console.log(message)
    // })
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        // INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
        myConnection.query(`INSERT INTO test (aaa) VALUES ('${message}')`, function (error, results, fields) {
            if (error) throw error; 
            console.log('The solution is: ', results);
        });
        ws.send('ceshi')
        // myConnection.release()
    });
    
});


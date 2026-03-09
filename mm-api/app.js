const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.use(express.json());

// typedef struct Packet {
//     uint32_t id;
//     short int alert;
//     float latitude;
//     float longitude;
//     float altitude;
// 	// output from color sensor
//     uint16_t color_r, color_g, color_b, color_c;
// } Packet;

const packets_received = [
    { 
        id:1, 
        alert:0, 
        lat: 34.345253,
        long: 36.03929,
        alt: 34,
        r:34,
        g:100,
        b:140
    },
  
];

app.get('/api/v1/packets-received', (req, res) => {
    res.json(packets_received);
});

app.post('/api/v1/log', (req, res) => {
    const data = req.body.name;
    console.log('Received log: ', data);
    packets_received.push(req.body);
    res.status(200).json({message: 'Log received.' });
    res.json(packets_received);
});


app.listen(3000, () => console.log('API running on port 3000'));
// const http = require('http');
const express = require("express")
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express()
const port = process.env.PORT || 6664
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.get('/message', (req,res) => {
client.messages
  .create({
     body: 'Why is Dougs name MOTHA FUKKA BIG DALLS in the API ??',
     from: '+17205730114',
     to: '+19705319665'
   })
  .then(message => console.log(message.sid));
})
// app.post('/sms', (req, res) => {
//     const twiml = new MessagingResponse();
  
//     twiml.message('The Robots are coming! Head for the hills!');
  
//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
//   });

app.listen(port, () => console.log(`Another server now running on PORT: ${port}`))
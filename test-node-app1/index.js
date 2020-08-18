const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.json())

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};


app.get('/', (req, res) => {
  res.send('Hello Bönen!')
})


app.get('/msg', (req, res) => {
  res.json(messages);	
});



app.get('/msg/:msgID', (req, res) => {
  const reqestedMsg = messages[req.params.msgID]
  if(reqestedMsg != undefined) {
	  res.json(messages[req.params.msgID]);	
  }
  else {
  	let errorMsg = {
  		id: '-1',
  		text: 'not available',
  	}
  	res.json(errorMsg)
  }
});


app.put('/msg/:msgID', (req, res) => {
  const newMsg = req.body
  newMsg.id = req.params.msgID

  messages[req.params.msgID] = newMsg

  const reqestedMsg = messages[req.params.msgID]
  if(reqestedMsg != undefined) {
    res.json(messages[req.params.msgID]); 
  }
  else {
    let errorMsg = {
      id: '-1',
      text: 'not available',
    }
    res.json(errorMsg)
  }
});


app.listen(port, () => {
  console.log(`Simple app listening at http://localhost:${port}`)
})
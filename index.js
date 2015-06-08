

var OpenTok = require('opentok'),
    opentok = new OpenTok(45250532,'54afc8f4b42cbec283a979313eea14ea398fb221');

// Create a session that will attempt to transmit streams directly between
// clients. If clients cannot connect, the session uses the OpenTok TURN server:
opentok.createSession(function(err, session) {
  if (err) return console.log(err);

  // save the sessionId
  //db.save('session', session.sessionId, done);
  // Genrate a Token from a session object (returned from createSession)
  token = session.generateToken();
  console.log("Token created");
  console.log(token);

  var publisher;
var targetElement = 'publisherContainer';

publisher = opentok.initPublisher(targetElement, null, function(error) {
  if (error) {
    // The client cannot publish.
    // You may want to notify the user.
  } else {
    console.log('Publisher initialized.');
  }
});



});


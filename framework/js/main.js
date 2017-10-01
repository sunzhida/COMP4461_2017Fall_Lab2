/*
Author: sunzhida
This is a template used for comp4461 2017fall
*/


var hue = jsHue();

//Discover local bridge
hue.discover().then(bridges => {
    if (bridges.length === 0) {
        console.log('No bridges found.');
    } else {
        bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
    }
}).catch(e => console.log('Error finding bridges', e));

var bridge = hue.bridge('192.168.0.102');

// create user account (requires link button to be pressed)
bridge.createUser('test').then(data => {

    //First, try to get the bridge assigned username after press the button
    console.log(data);

    //Second, extract bridge-generated username from returned data
    var username = data[0].success.username;
    console.log('New username:', username);
});

// //instantiate user object with username
// var user = bridge.user("6suz7T8AtzF7KHVqIBC1TpbzCG-I-NpFlnZbObV9");
//
// user.setLightState(1, { on: true, bri: 128, hue: Math.round(Math.random() * 65000) }).then(data => {
//     // process response data, do other things
// });


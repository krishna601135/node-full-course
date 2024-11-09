const EventEmitter = require('events');

const myCustomEvent = new EventEmitter();


function display(){
  console.log('User Created..');
}

function database(){
 console.log('User added to the database');
}

myCustomEvent.on('userCreated', display);

myCustomEvent.on('userCreated', database);

myCustomEvent.emit('userCreated');




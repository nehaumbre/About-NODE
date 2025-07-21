import EventEmitter from "events";

//creating instance
const customEmitter = new EventEmitter();

//1. on: listen/register for an event
//2. once : listen/register for an event once
//3. off: stop listening for an event
//4. emit: trigger(call/emit) an event
//5. listenerCount: get the number of listeners for an event
//6. rawListeners: get the raw listeners for an event
//7. on('newListener'): listen for new listeners
//8. on('removeListener'): listen for removed listeners
//9. setMaxListeners(): set the maximum number of listeners for an event
//10. listeners(): get the listeners for an event
//11. listenerCount(): get the number of listeners for an event
//12. prependListener(): prepend a listener to the beginning of the listeners array
//13. prependOnceListener(): prepend a listener to the beginning of the listeners array
//14. appendListener(): append a listener to the end of the listeners array
//15. appendOnceListener(): append a listener to the end of the listeners array
//example of usage

customEmitter.on("response",(name,id)=>{
    console.log(`data received from ${name} with id ${id}`);
})

//emit the event
customEmitter.emit("response","John Doe",1234);// if u write once instead of on ull get only first output John Doe one
customEmitter.emit("response","Camila Doe",1234);
customEmitter.emit("response","Jim Miller",1234);



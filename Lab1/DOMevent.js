import {EventEmitter} from "node:events";

function createDomElements(){
const emitter = new EventEmitter();
return {
    addEventListener(eventType, listener){
        emitter.on(eventType, listener);
    },
    removeEventListener(eventType, listener){
        emitter.off(eventType, listener);
    },
    dispatchEvent(event){
        event.target=this;
        event.currentTarget=this;
        emitter.emit(event.eventType, event);
    }
}
}

const button=createDomElements();
button.addEventListener('submit',()=>{
    console.log("data submitted successfully");
})
function handleClick(event){
    console.log("data submitted successfully");

}
button.addEventListener('submit',handleClick);
button.dispatchEvent({
        eventType: "submit",
    });

button.dispatchEvent({
        eventType: "submit",
    });
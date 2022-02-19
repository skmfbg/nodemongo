const socket=io();
// 

var message=document.getElementById('message');

var a=document.getElementsByTagName('a');


message.addEventListener("click",()=>{
    alert("data saved.");
})

function clickButton(){
    socket.emit("msg",{name:"rakesh kumar",address:"purnia",age:32});
}


// socket.emit("conn",{name:nam});



socket.on('chat',(data)=>{
    console.log(data);
})

socket.on('reply',data=>{
    console.log(data);
})
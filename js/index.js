const video = document.querySelector('#video');
const canvas = document.querySelector('#canvas');
const snap = document.querySelector('#snap');
const errorMsgElement = document.querySelector('#spanErrorMsg')
const snap1 = document.querySelector('#snap1');

const constraints = {
    audio: true,
    video:{
        width: 1280, height: 720
    }
};

async function init(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSucess(stream);
    }
    catch(e){
        errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
    }
}

function handleSucess(stream){
    window.stream = stream;
    video.srcObject = stream;
}

init();


var context = canvas.getContext('2d');
snap.addEventListener("click", function(){
context.drawImage(video, 0, 0, 640, 480);
});
       function getFullscreenElement(){
            return document.fullscreenElement
        }
 
        function toggleFullScreen(){
            if (getFullscreenElement()) {
                document.exitFullscreen();
            }
 
            else{
                document.getElementById("canvas").requestFullscreen().catch(console.log);
        }
    }
        snap1.addEventListener("click", () => {
            toggleFullScreen();
        });
        document.addEventListener("dblclick", () => {
            document.exitFullscreen();
        });


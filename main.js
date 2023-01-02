song1="";
song2="";
leftx=0;
righty=0;
lefty=0;
rightx=0;
function preload(){
    song1=loadSound("harry.mp3");
    song2=loadSound("belive.mp3")
}
function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

video=createCapture(VIDEO);
video.hide();
model=ml5.poseNet(video, modelLoaded);
model.on('pose', gotPoses);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftx=results[0].pose.leftWrist.x;
    lefty=results[0].pose.leftWrist.y;

    rightx=results[0].pose.rightWrist.x;
    righty=results[0].pose.rightWrist.y;

    console.log("LeftWristx = " + leftx +" leftwristy = "+lefty);
    console.log("RightWristx = " + rightx +" rightwristy = "+righty);
}
}
function modelLoaded(){
    console.log("Pose Net is Started")
}

function draw(){
    image(video,0,0,600,500);


}
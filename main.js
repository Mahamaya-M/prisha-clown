noseX=0
noseY=0
function preload(){
clown_nose = loadImage('https://i.postimg.cc/ncn82fzp/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png');
}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video= createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized")

}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log(results[0].pose.nose.x)
    console.log(results[0].pose.nose.y)
}
}

function draw(){
image(video,0,0,400,400);
fill ("#ff0000");
//circle(noseX,noseY,40);
image(clown_nose, noseX-170,noseY-70, 50, 30);

}
function takeSnap(){
    save('selfie.png')
}
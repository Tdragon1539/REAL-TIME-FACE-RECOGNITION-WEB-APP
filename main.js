function preload(){

}
function setup(){
canvas = createCanvas(300, 300);
video = createCapture(VIDEO);
canvas.center();
video.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nNfTmkvLi/model.json", modelLoaded);
}
function draw(){
image(video, 0, 0, 300, 300);
classifier.classify(video, gotResults);
}
function modelLoaded(){
console.log("Model Loaded!");
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
        else{
            console.log(results);
        document.getElementById("result_of_object").innerHTML = results[0].label;
        document.getElementById("result_of_accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
   

}

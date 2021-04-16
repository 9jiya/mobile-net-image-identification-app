function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  x = ml5.imageClassifier("MobileNet",modelLoaded);
}
function modelLoaded(){
  console.log("Model Loaded");
}
function draw(){
  img = image(video,0,0,300,300);
  x.classify(video,gotResults);
}
function gotResults(error,results){
  if(error){
    console.log(error)
  }
  else{
    console.log(results)
    document.getElementById("Object").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
  }
}
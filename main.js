Webcam.set({
     width: 360,
     height: 300,
     image_format: "png", 
     png_quality: 100
     
});

var camera = document.getElementById("webcam_view");

Webcam.attach('#webcam_view');

function capture(){
Webcam.snap(function(data_uri){
     document.getElementById("snap_div").innerHTML = '<img id="snap_img" src =  " ' + data_uri + '">';   
});
}

console.log("ml5 version is " + ml5.version);

var classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k6gt-_S65/model.json", modelLoad);

function modelLoad(){
try {
     console.log("Worked");
} catch (error) {
     console.error(":( did not work");
}
}

function Identity(){
var cam = document.getElementById("snap_img");
classify.classify(cam, getResult);
}

function getResult(error, results){
if(error){
     console.error(":( did not work in getResult");
     console.error(error);
}else{
     console.log(results);
     console.log(results.length);
     document.getElementById("result_obj").innerText = results[0].label;
     document.getElementById("accuracy").innerText = results[0].confidence.toFixed(3);

}
}

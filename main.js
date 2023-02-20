prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/U-DI53bq0/model.json",modelloaded);

function modelloaded(){
    console.log("model has been initialized");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
     if(error){
        console.error(error);
     }else{
        console.log(results);
        document.getElementById("status").innerHTML=results[0].label;
        prediction_1=results[0].label;
        if(prediction_1=="Masks"){
            document.getElementById("update_emoji").innerHTML="&#x1F637;";
            document.getElementById("status").innerHTML="entry accepted";

        }
        if(prediction_1=="No masks"){
            document.getElementById("update_emoji").innerHTML="&#x26d4;";
            document.getElementById("status").innerHTML="entry denied";

        }
     }
}
    
//define function modelLoaded

//define function check() 


//define function gotResult(error, results)

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/QuHCBnvUt/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var Melissa = 0;
var Rafael = 0;
var Isabelle = 0;
var Yan = 0;

function gotResults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        randomNumberR = Math.floor(Math.random() * 255);
        randomNumberG = Math.floor(Math.random() * 255);
        randomNumberB = Math.floor(Math.random() * 255);
        document.getElementById("result_label").innerHTML = 'Posso Ouvir -' + results[0].label;
        document.getElementById("result_count").innerHTML = 'cachorro detectado = ' + Rafael +'cobra detectada' + Mellissa +'gato detectado' + Isabelle + 'peixe detectado' + Yan ; 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    }
}
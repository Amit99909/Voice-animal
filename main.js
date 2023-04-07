function startmic() {
    navigator.mediaDevices.getUserMedia({audio: true});

    tm = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelloaded);
    tm.classify(getResults);
}

function modelloaded() {
    console.log("teachable machine is loaded");
}

function getResults(error,result) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(result);
    }
}
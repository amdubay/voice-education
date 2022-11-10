var synth = window.speechSynthesis;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


var vehicles = {
    "truck": {
        accepted: ["truck",],
        image: "img/truck.jpg"    
    },
    "police car": ["be", "b", "bee"],
    "ambulance": ["see", "c", "sea"],
    
};
console.log(alphabet)
console.log(Object.keys(phonetic))

var recognition = new SpeechRecognition();

if (SpeechGrammarList) {
  // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
  // This code is provided as a demonstration of possible capability. You may choose not to use it.
  var speechRecognitionList = new SpeechGrammarList();
  var grammar =
    "#JSGF V1.0; grammar alphabet; public <alphabet> = " + alphabet.join(" | ") + " ;";
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 10;
console.log(speechRecognitionList[0]);

// question will eventually be randomly chosen.
let question =  `<img href=""`;
let matchQuestion = phonetic[question]
let appendQuestion = document.getElementById("question");


appendQuestion.innerHTML = question;
document.body.onclick = function () {
  recognition.start();
  console.log("Ready to receive a letter.");
};

recognition.onresult = function (event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var letter = event.results[0][0].transcript;
  console.log("Result received: " + letter + ".");
  console.log("Confidence: " + event.results[0][0].confidence);
  console.log(letter);
  console.log(event.results[0])
  let result = ""
  console.log(event.results[0].length)
  console.log(event.results[0][1])
  console.log(phonetic[question])
  let correct = false;
  console.log(correct)
  for (i = 0; i <event.results[0].length; i++) {
    for (c=0; c < matchQuestion.length; c++) {
        if (event.results[0][i].transcript.toLowerCase() == matchQuestion[c]) {
            correct = true;
            console.log(correct)
            break;
        }
    }
console.log(correct)
        
    /*if (event.results[0][i].transcript.length == 1) {
            result = event.results[0][i].transcript
            break;
        }*/
  }

  console.log("result = " + result);

  for (i = 0; i < alphabet.length; i++) {
    //console.log("in loop, current " + alphabet[i]);
    if (letter.includes(alphabet[i])) {
      //console.log("match found " + alphabet[i]);
    }
  }
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onnomatch = function (event) {
  console.log("I didn't recognise that letter.");
};

recognition.onerror = function (event) {
  console.log("Error occurred in recognition: " + event.error);
};

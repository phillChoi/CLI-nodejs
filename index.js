const prompt = require('prompt-sync')({sigint: true});

let episodeArray = [
  //{ epSource: 'https://twist.moe/a/one-punch-man/1', epNo: '1' },
 /*  { epSource: 'https://twist.moe/a/one-punch-man/2', epNo: '2' },
  { epSource: 'https://twist.moe/a/one-punch-man/3', epNo: '3' },
  { epSource: 'https://twist.moe/a/one-punch-man/4', epNo: '4' },
  { epSource: 'https://twist.moe/a/one-punch-man/5', epNo: '5' },
  { epSource: 'https://twist.moe/a/one-punch-man/6', epNo: '6' }, */
];
console.log(episodeArray);
let episodeFound = false;
/*
while (!episodeFound){
  const number = prompt("Which episode number?");
  for (const episode in episodeArray){
    if (number == episode.epNo){
      episodeFound = true;
      console.log("found");
      break;
    };
  };  
}; */ 

function fixText(string){
  return string.toLowerCase().trim();
}

function searchAnime(){
  const answer = prompt("What anime you want?")
  console.log("wrong: "+answer);
}

function getAnime(){
  if (episodeArray.length == 1)
    return console.log(episodeArray[0].epSource);
  if (episodeArray.length == 0){
    console.log("This title was not found");
    let answer = prompt("Do you want to switch to English titles? (Yes or No) ")
    answer = fixText(answer);  
      if (answer == "yes"){
        return console.log("yes");
      };
      if (answer == "no"){
        let answer2 = prompt("Do you want to try again?")
        answer2 = fixText(answer2);
        if (answer2 == "yes"){
          console.log(answer2);
          return searchAnime();
        } 
        if (answer2 == "no"){
          console.log(answer2);
          return console.log("Try executing again")
        }

         
      };
        
  }
}


function getValues(array){
  const number = prompt("What number?")
  for (const link of array){
    if (number == link.epNo){
      console.log("Episode is found: "+link.epSource);
      return link.epSource;
    }
    return "Episode not found.";
    //console.log(link.epNo);
  }
}
//const result = getValues();
//console.log(result);
getAnime();
var image = document.querySelector("#image");
var question = document.querySelector("#text-container");
var answer1 = document.querySelector("#button-1");
var answer2 = document.querySelector("#button-2");
var answer3 = document.querySelector("#button-3");
var answer4 = document.querySelector("#button-4");
var buttons = [answer1, answer2, answer3, answer4];

var counter = document.querySelector("#question-number");
counterValue = 1;

var score = document.createElement("p");
scoreValue = 0;

var textQuestion = ["Dans <i>Le Parrain II</i> (1974), on découvre le nom de naissance de Vito Corleone. Quel est-il ?", "Lequel de ces westerns ne rentre pas dans la catégorie 'western spaghetti' ?", "Dans <i>Star Wars, épisode IV : Un nouvel espoir</i> (1977), quelle planète le Grand Moff Tarkin ordonne-t-il de détruire pour démontrer la puissance de frappe de l'Étoile noire ?", "Dans <i>Blade Runner</i> (1982), comment se nomme l'entreprise assurant la fabrication des Nexus-6 ?", "De quel pays sont originaires les malfaiteurs auxquels fait face John McClane dans <i>Piège de cristal</i> (1988) ?", "De quel classique du cinéma de science-fiction le personnage de Robby le robot est-il issu ?", "Dans <i>Conan le Barbare</i> (1982), quel animal les membres de la secte de Thulsa Doom vénèrent-ils ?", "Quel célèbre réalisateur de films d'action hongkongais a mis en scène la saga <i>Il était une fois en Chine</i> ?", "Lequel de ces artéfacts n'a pas été découvert par Indiana Jones ?"];
var textAnswer1 = ["Vittorio Garibaldi", "<i>L'Homme aux colts d'or</i>", "Dagoba", "Acme Corp.", "Allemagne", "<i>Battle Beyond the Sun</i>", "Le loup", "John Woo", "L'Arche d'alliance"];
var textAnswer2 = ["Vittorio Andolini", "<i>Colorado</i>", "Alderaan", "Genom", "Russie", "<i>Les Évadés de l'espace</i>", "Le serpent", "Ringo Lam", "Excalibur"];
var textAnswer3 = ["Vittore Carpaccio", "<i>Django, prépare ton cercueil !</i>", "Hoth", "Tyrell Corp.", "Pakistan", "<i>Planète interdite</i>", "L'araignée", "Ronny Yu", "Les crânes de cristal"];
var textAnswer4 = ["Vittorio Storaro", "<i>Le Dernier Jour de la colère</i>", "Tatooine", "Cyberdyne", "Cuba", "<i>2001, l'Odyssée de l'espace</i>", "Le scorpion", "Tsui Hark", "Le Saint Graal"];

function questionOne() {
  question.innerHTML = textQuestion[0];
  answer1.innerHTML = textAnswer1[0];
  answer2.innerHTML = textAnswer2[0];
  answer3.innerHTML = textAnswer3[0];
  answer4.innerHTML = textAnswer4[0];
  image.style.width = "480px";
  image.style.height = "270px";
  image.style.backgroundImage = "url(https://cinemadroide.files.wordpress.com/2020/03/godfather-vedette-cinemadroide.gif)";
  
  answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionTwo()
  }
  answer2.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "green";
      questionTwo()
  }
  answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionTwo()
  }
  answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionTwo()
  }
}

function questionTwo() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[1];
    answer1.innerHTML = textAnswer1[1];
    answer2.innerHTML = textAnswer2[1];
    answer3.innerHTML = textAnswer3[1];
    answer4.innerHTML = textAnswer4[1];
    image.style.width = "500px";
    image.style.height = "218px";
    image.style.backgroundImage = "url(https://img.over-blog-kiwi.com/0/93/15/83/20180917/ob_f15643_c4aca99d463f1a90c4a89b92cc6d08ff.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "green";
      questionThree()
    }
    answer2.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "red";
      questionThree()
    }
    answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionThree()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionThree()
    }
  }, 1000)
}

function questionThree() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[2];
    answer1.innerHTML = textAnswer1[2];
    answer2.innerHTML = textAnswer2[2];
    answer3.innerHTML = textAnswer3[2];
    answer4.innerHTML = textAnswer4[2];
    image.style.width = "500px";
    image.style.height = "218px";
    image.style.backgroundImage = "url(https://i.imgur.com/TXhraeC.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionFour()
    }
    answer2.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "green";
      questionFour()
    }
    answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionFour()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionFour()
    }
  }, 1000)
}

function questionFour() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[3];
    answer1.innerHTML = textAnswer1[3];
    answer2.innerHTML = textAnswer2[3];
    answer3.innerHTML = textAnswer3[3];
    answer4.innerHTML = textAnswer4[3];
    image.style.width = "540px";
    image.style.height = "258px";
    image.style.backgroundImage = "url(https://i.pinimg.com/originals/7c/4f/c8/7c4fc8edbda5de24daddce49f260cde6.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionFive()
    }
    answer2.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "red";
      questionFive()
    }
    answer3.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "green";
      questionFive()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionFive()
    }
  }, 1000)
}

function questionFive() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[4];
    answer1.innerHTML = textAnswer1[4];
    answer2.innerHTML = textAnswer2[4];
    answer3.innerHTML = textAnswer3[4];
    answer4.innerHTML = textAnswer4[4];
    image.style.width = "400px";
    image.style.height = "241px";
    image.style.backgroundImage = "url(https://64.media.tumblr.com/bb488f777c360a29efc02b2e357d488c/tumblr_inline_pjq45msi6x1tg545a_540.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue ++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "green";
      questionSix()
    }
    answer2.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "red";
      questionSix()
    }
    answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionSix()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionSix()
    }
  }, 1000)
}

function questionSix() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[5];
    answer1.innerHTML = textAnswer1[5];
    answer2.innerHTML = textAnswer2[5];
    answer3.innerHTML = textAnswer3[5];
    answer4.innerHTML = textAnswer4[5];
    image.style.width = "350px";
    image.style.height = "287px";
    image.style.backgroundImage = "url(https://64.media.tumblr.com/d6dd855630eeb160bd67c2338ccb4b1e/tumblr_olyotxN5FJ1v61b0eo2_400.gifv)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionSeven()
    }
    answer2.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "red";
      questionSeven()
    }
    answer3.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "green";
      questionSeven()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionSeven()
    }
  }, 1000)
}

function questionSeven() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[6];
    answer1.innerHTML = textAnswer1[6];
    answer2.innerHTML = textAnswer2[6];
    answer3.innerHTML = textAnswer3[6];
    answer4.innerHTML = textAnswer4[6];
    image.style.width = "444px";
    image.style.height = "250px";
    image.style.backgroundImage = "url(https://i.4pcdn.org/pol/1595283227193.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionEight()
    }
    answer2.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "green";
      questionEight()
    }
    answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionEight()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionEight()
    }
  }, 1000)
}

function questionEight() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[7];
    answer1.innerHTML = textAnswer1[7];
    answer2.innerHTML = textAnswer2[7];
    answer3.innerHTML = textAnswer3[7];
    answer4.innerHTML = textAnswer4[7];
    image.style.width = "466px";
    image.style.height = "201px";
    image.style.backgroundImage = "url(http://img.soogif.com/xUOOyPqHnk3b4mipqZ0DTIbHqXneDyq4.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA"
    }
    answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionNine()
    }
    answer2.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "red";
      questionNine()
    }
    answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionNine()
    }
    answer4.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "green";
      questionNine()
    }
  }, 1000)
}

function questionNine() {
  setTimeout(function() {
    counterValue++;
    counter.innerHTML = "Question " + counterValue + " sur 10";
    question.innerHTML = textQuestion[8];
    answer1.innerHTML = textAnswer1[8];
    answer2.innerHTML = textAnswer2[8];
    answer3.innerHTML = textAnswer3[8];
    answer4.innerHTML = textAnswer4[8];
    image.style.width = "500px";
    image.style.height = "219px";
    image.style.backgroundImage = "url(https://i.pinimg.com/originals/81/1c/47/811c4734fe197ac8367a377ab835fa74.gif)";
    for (var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#06BFFA";
    }
    answer1.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer1.style.backgroundColor = "red";
      questionEight()
    }
    answer2.onclick = function() {
      scoreValue++;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer2.style.backgroundColor = "green";
      questionEight()
    }
    answer3.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer3.style.backgroundColor = "red";
      questionEight()
    }
    answer4.onclick = function() {
      scoreValue += 0;
      score.textContent = scoreValue + "/10";
      console.log(scoreValue);
      answer4.style.backgroundColor = "red";
      questionEight()
    }
  }, 1000)
}

questionOne();
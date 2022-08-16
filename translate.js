var dataReload = document.querySelectorAll("a[data-reload]");
var primeiroh1 = document.getElementById("primeiroh1");
var language = {
  eng: {
    firstA: "Advantages",
    secondA: "Why Us?",
    thirdA: "Contact",
    text1: "Who needs WeWhistle?",
    text2: "Do you have ",
    text3: "more than 50 employees?",
    
    
  },

  de: {
    firstA: "Vorteile",
    secondA: "Warum wir?",
    thirdA: "Kontakt",
    text1: "Wer braucht WeWhistle?",
    text2: "Haben Sie ",
    text3: "mehr als 50 Mitarbeiter?",
   
  }

};

var setLanguage = () => {

  if (window.location.hash === "#de") {
    firstA.textContent = language.de.firstA;
    secondA.textContent = language.de.secondA;
    thirdA.textContent = language.de.thirdA;
    text1.textContent = language.de.text1;
    text2.textContent = language.de.text2;
   

  } else {
    firstA.textContent = language.eng.firstA;
    secondA.textContent = language.eng.secondA;
    thirdA.textContent = language.eng.thirdA;
    text1.textContent = language.eng.text1;
    text2.textContent = language.eng.text2;
   
  }

}

for (i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function(e) {
    window.location.hash = this.getAttribute("href");
    setLanguage();
  }
}

setLanguage();
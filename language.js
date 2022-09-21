i18n = {};
// i18n["pt"] = {
//   "advantage": "Nome",
//   "contact": "Contato"
// };



i18n["en"] = {
  "nav1": "Advantages",
  "nav2": "Why Us?",
  "nav3": "Contact",
  "button1": "Get Started",
  "heroH1": "Confidencial Whistleblowing solution for healthier organizations.",
  "key1": "Do you have more than 50 employees? Or does your annual turnover exceed 10 million euros? Then you are already legally obliged to have an anonymous whistleblowing system in place.",
  "key2": "In addition, public institutions and municipalities with ",
  "key3": "more than 10,000 inhabitants",
 
  
 
};

i18n["de"] = {
  "nav1": "Vorteile",
  "nav2": "Warum uns?",
  "nav3": "Kontakt",
  "button1": "Los geht's",
  "heroH1": "Wer benötigt WeWhistle?",
  "key1": "Haben Sie",
  "key2": "mehr als 50 Mitarbeiter?",
  "button1": "Los geht's",
};

i18n["fr"] = {
  "nav1": "Avantages",
  "nav2": "Pourquoi nous?",
  "nav3": "Contact",
  "button1": "Contactez-nous",
  "heroH1": "Confidencial Whistleblowing solution pour des organizations plus saines.",
  "key1": "Get Started",
  "key2": "Get Started",
  "button1": "Contactez-nous",
};



var language = document.getElementById("language");
var elementos = document.querySelectorAll("[class*='i18n']");
var onLanguageChange = function (event) {
  [].forEach.call(elementos, function (elem, indice) {
    var propName = [].filter.call(elem.classList, function (classe, indice) {
      return classe.indexOf("i18n") >= 0;
    })[0].split("-")[1];
    elem.textContent = i18n[language.value][propName];
  }); 
};

language.addEventListener("change", onLanguageChange);
onLanguageChange();




//document.querySelector("i18n-nav2").innerHTML = "Novo Texto";
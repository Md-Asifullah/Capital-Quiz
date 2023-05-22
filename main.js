"use strict";

// Data retrieved from: https://geographyfieldwork.com/WorldCapitalCities.htm

// Initialization
let score = 0;
let lifeLine = 6;
let correctQuestionIndex = 0;
let selectedOption = 0;
const countryName = document.querySelector(".country-name");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const optionsContainer = document.querySelector(".options-container");
const answerNextBtn = document.querySelector(".answer-next-btn");
const msg = document.querySelector(".msg");
const nextButton = document.querySelector(".next-button");
const helpButton = document.querySelector(".help-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".modal-close");
const scoreDisplay = document.querySelector(".scoreDisplay");
const lifeStatus = document.querySelector(".life-status");
const gameMessage = document.querySelector(".game-message");
const scoreDisplay2 = document.querySelector(".scoreDisplay2");
const gameEnd = document.querySelector(".game-end");
const scoreDisplay3 = document.querySelector(".scoreDisplay3");
const gameWonDiv = document.querySelector(".game-won-div");
const wonPlayAgain = document.querySelector(".won-play-again");
const losePlayAgain = document.querySelector(".lose-play-again");

// Arrays
// Countries Array

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "England",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Federated States of Micronesia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Northern Ireland",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Scotland",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wales",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Capitals Array
const capitals = [
  "Kabul",
  "Tirana",
  "Algiers",
  "Andorra la Vella",
  "Luanda",
  "Saint John's",
  "Buenos Aires",
  "Yerevan",
  "Canberra",
  "Vienna",
  "Baku",
  "Nassau",
  "Manama",
  "Dhaka",
  "Bridgetown",
  "Minsk",
  "Brussels",
  "Belmopan",
  "Porto Novo",
  "Thimphu",
  "La Paz",
  "Sarajevo",
  "Gaborone",
  "Brasilia",
  "Bandar Seri Begawan",
  "Sofia",
  "Ouagadougou",
  "Gitega",
  "Phnom Penh",
  "Yaounde",
  "Ottawa",
  "Praia",
  "Bangui",
  "N'Djamena",
  "Santiago",
  "Beijing",
  "Bogota",
  "Moroni",
  "Kinshasa",
  "Brazzaville",
  "San Jose",
  "Yamoussoukro",
  "Zagreb",
  "Havana",
  "Nicosia",
  "Prague",
  "Copenhagen",
  "Djibouti",
  "Roseau",
  "Santo Domingo",
  "Dili",
  "Quito",
  "Cairo",
  "San Salvador",
  "London",
  "Malabo",
  "Asmara",
  "Tallinn",
  "Mbabana",
  "Addis Ababa",
  "Palikir",
  "Suva",
  "Helsinki",
  "Paris",
  "Libreville",
  "Banjul",
  "Tbilisi",
  "Berlin",
  "Accra",
  "Athens",
  "Saint George's",
  "Guatemala City",
  "Conakry",
  "Bissau",
  "Georgetown",
  "Port au Prince",
  "Tegucigalpa",
  "Budapest",
  "Reykjavik",
  "New Delhi",
  "Jakarta",
  "Tehran",
  "Baghdad",
  "Dublin",
  "Jerusalem",
  "Rome",
  "Kingston",
  "Tokyo",
  "Amman",
  "Nur-Sultan",
  "Nairobi",
  "Tarawa Atoll",
  "Pristina",
  "Kuwait City",
  "Bishkek",
  "Vientiane",
  "Riga",
  "Beirut",
  "Maseru",
  "Monrovia",
  "Tripoli",
  "Vaduz",
  "Vilnius",
  "Luxembourg",
  "Antananarivo",
  "Lilongwe",
  "Kuala Lumpur",
  "Male",
  "Bamako",
  "Valletta",
  "Majuro",
  "Nouakchott",
  "Port Louis",
  "Mexico City",
  "Chisinau",
  "Monaco",
  "Ulaanbaatar",
  "Podgorica",
  "Rabat",
  "Maputo",
  "Nay Pyi Taw",
  "Windhoek",
  "No official capital",
  "Kathmandu",
  "Amsterdam",
  "Wellington",
  "Managua",
  "Niamey",
  "Abuja",
  "Pyongyang",
  "Skopje",
  "Belfast",
  "Oslo",
  "Muscat",
  "Islamabad",
  "Melekeok",
  "Panama City",
  "Port Moresby",
  "Asuncion",
  "Lima",
  "Manila",
  "Warsaw",
  "Lisbon",
  "Doha",
  "Bucharest",
  "Moscow",
  "Kigali",
  "Basseterre",
  "Castries",
  "Kingstown",
  "Apia",
  "San Marino",
  "Sao Tome",
  "Riyadh",
  "Edinburgh",
  "Dakar",
  "Belgrade",
  "Victoria",
  "Freetown",
  "Singapore",
  "Bratislava",
  "Ljubljana",
  "Honiara",
  "Mogadishu",
  "Cape Town",
  "Seoul",
  "Juba",
  "Madrid",
  "Colombo",
  "Khartoum",
  "Paramaribo",
  "Stockholm",
  "Bern",
  "Damascus",
  "Taipei",
  "Dushanbe",
  "Dodoma",
  "Bangkok",
  "Lome",
  "Nuku'alofa",
  "Port of Spain",
  "Tunis",
  "Ankara",
  "Ashgabat",
  "Funafuti",
  "Kampala",
  "Kiev",
  "Abu Dhabi",
  "London",
  "Washington D.C.",
  "Montevideo",
  "Tashkent",
  "Port Vila",
  "Vatican City",
  "Caracas",
  "Hanoi",
  "Cardiff",
  "Sana'a",
  "Lusaka",
  "Harare",
];

// Functions

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateQuestion() {
  const countryCapitalIndex = generateRandomNumber(countries.length);
  countryName.textContent = countries[countryCapitalIndex];
  return countryCapitalIndex;
}

function generateOptions(questionIndex) {
  const length = countries.length - 1;
  // console.log(length);
  const optionsArray = [];
  // console.log(optionsArray.length);
  while (optionsArray.length <= 3) {
    let randomNumber = generateRandomNumber(length);
    if (!optionsArray.includes(randomNumber) || randomNumber != questionIndex) {
      optionsArray.push(randomNumber);
    }
  }
  // console.log(optionsArray);
  correctQuestionIndex = generateRandomNumber(4) - 1;
  optionsArray[correctQuestionIndex] = questionIndex;
  option1.textContent = capitals[optionsArray[0]];
  option2.textContent = capitals[optionsArray[1]];
  option3.textContent = capitals[optionsArray[2]];
  option4.textContent = capitals[optionsArray[3]];
}

function remove1Element(questionIndex) {
  countries.splice(questionIndex, 1);
  capitals.splice(questionIndex, 1);
}

function checkAnswer(answer) {
  if (answer == correctQuestionIndex) {
    optionsContainer.classList.add("hidden");
    answerNextBtn.classList.remove("hidden");
    msg.textContent = "Correct Anwer!";
    msg.classList.add("correct");
    msg.classList.remove("wrong");
    score++;
    scoreDisplay.textContent = score;
    if (score == 50) {
      gameWon();
    }
  } else {
    optionsContainer.classList.add("hidden");
    answerNextBtn.classList.remove("hidden");
    msg.textContent = `Wrong Anwer. Correct Answer is ${capitals[questionIndex]}`;
    msg.classList.add("wrong");
    msg.classList.remove("correct");
    lifeLine--;
    lifeStatus.src = `images/health_0${lifeLine}.png`;
    if (lifeLine == 0) {
      gameOver();
    }
  }
}

function hideModal() {
  answerNextBtn.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function gameWon() {
  gameWonDiv.classList.remove("hidden");
  console.log("Game Won function is called!");
  answerNextBtn.classList.add("hidden");
  optionsContainer.classList.add("hidden");
  gameMessage.classList.add("hidden");
  scoreDisplay3.textContent = score;
}

function gameOver() {
  console.log("Game Over function is called!");
  answerNextBtn.classList.add("hidden");
  optionsContainer.classList.add("hidden");
  gameMessage.classList.add("hidden");
  gameEnd.classList.remove("hidden");
  scoreDisplay2.textContent = score;
}

// On Click Events
option1.addEventListener("click", function () {
  selectedOption = 0;
  checkAnswer(selectedOption);
});

option2.addEventListener("click", function () {
  selectedOption = 1;
  checkAnswer(selectedOption);
});

option3.addEventListener("click", function () {
  selectedOption = 2;
  checkAnswer(selectedOption);
});

option4.addEventListener("click", function () {
  selectedOption = 3;
  checkAnswer(selectedOption);
});

nextButton.addEventListener("click", function () {
  optionsContainer.classList.remove("hidden");
  answerNextBtn.classList.add("hidden");
  remove1Element(questionIndex);
  questionIndex = generateQuestion();
  generateOptions(questionIndex);
  // console.log(`Country Array Length: ${countries.length}`);
  // console.log(`Capital Array Length: ${capitals.length}`);
  // console.log("--------------------------------------------");
});

helpButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

modalCloseBtn.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

wonPlayAgain.addEventListener("click", function () {
  location.reload();
});

losePlayAgain.addEventListener("click", function () {
  location.reload();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});

// Main logic
let questionIndex = generateQuestion();
generateOptions(questionIndex);
scoreDisplay.textContent = score;

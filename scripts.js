/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");
console.log("foo", CONSONANTS);

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

console.log("foo", VOWELS);
//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/**
 * Skilar lengsta orðinu í streng.
 * @param {string} str Strengur sem á að athuga.
 * @returns {string|null} Lengsta orðið eða null ef `str` er ekki strengur.
 */
function longest(str) {
  if (typeof str !== "string") {
    return null;
  }
  if (str.trim() === "") {
    return "";
  }
  const words = str.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
// Prófun
console.assert(longest("halló heimur!") === "heimur!", "longest: virkar");
console.assert(
  longest("") === "",
  "longest: tómur strengur skilar tómum streng"
);
console.assert(longest(null) === null, "longest: ekki strengur skilar null");

/**
 * Skilar stysta orðinu í streng.
 * @param {string} str Strengur sem á að athuga.
 * @returns {string|null} Stysta orðið eða null ef `str` er ekki strengur.
 */
function shortest(str) {
  if (typeof str !== "string") return null;
  if (str.trim() === "") return "";

  const words = str.split(" ");
  let shortestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
}
// Prófun
console.assert(shortest("halló heimur!") === "halló", "shortest: virkar");
console.assert(
  shortest("") === "",
  "shortest: tómur strengur skilar tómum streng"
);
console.assert(shortest(null) === null, "shortest: ekki strengur skilar null");

/**
 * Snýr við gefnum streng.
 * @param {string} str Strengur sem á að snúa við.
 * @returns {string|null} Strengur snúinn við eða null ef `str` er ekki strengur.
 */
function reverse(str) {
  if (isString(str)) {
    const splitStr = split(str, ""); 
    const reversed = splitStr.reverse();
    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse("") === "",
  "reverse: tómur strengur skilar tómum streng"
);
console.assert(reverse(null) === null, "reverse: ekki strengur skilar null");

/**
 * Athugar hvort strengur sé palindrome (lesinn eins afturábak og áfram).
 * @param {string} str Strengur sem á að athuga.
 * @returns {boolean} `true` ef strengurinn er palindrome, annars `false`.
 */

function palindrome(str) {
  if (!isString(str) || str.trim() === "") return false;

  const normalizedStr = str.toLowerCase();
  const reversedStr = normalizedStr.split("").reverse().join("");

  return normalizedStr === reversedStr;
}

console.assert(palindrome("halló") === false, "palindrome: ekki");
console.assert(palindrome("hah") === true, "palindrome: er");
console.assert(palindrome("") === false, "palindrome: ekki");

/**
 * Skilar fjölda sérhljóða í streng.
 * @param {string} str Strengur sem á að athuga.
 * @returns {number} Fjöldi sérhljóða eða 0 ef `str` er ekki strengur.
 */
function vowels(str) {
  if (!isString(str)) return 0;

  let count = 0;
  for (let char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      // Use the VOWELS constant
      count++;
    }
  }
  return count;
}
// Prófun
console.assert(vowels("halló") === 2, "vowels: virkar");
console.assert(vowels("") === 0, "vowels: tómur strengur skilar 0");
console.assert(vowels(null) === 0, "vowels: ekki strengur skilar 0");

/**
 * Skilar fjölda samhljóða í streng.
 * @param {string} str Strengur sem á að athuga.
 * @returns {number} Fjöldi samhljóða eða 0 ef `str` er ekki strengur.
 */
function consonants(str) {
  if (!isString(str)) return 0;

  let count = 0;
  for (let char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      // Use the CONSONANTS constant
      count++;
    }
  }
  return count; 
}
// Prófun
console.assert(consonants("halló") === 3, "consonants: virkar");
console.assert(consonants("") === 0, "consonants: tómur strengur skilar 0");
console.assert(consonants(null) === 0, "consonants: ekki strengur skilar 0");

//------------------------------------------------------------------------------
// Leiðbeint ferli
/**
 * Byrjar forritið sem biður notanda um að slá inn streng og sýnir ýmsar upplýsingar um hann.
 * Forritið sýnir lengsta og stysta orð, snýr strengnum við, telur sérhljóða og samhljóða,
 * og athugar hvort strengurinn sé samhverfur (palindrome).
 * Eftir niðurstöður er notanda boðið að reyna aftur.
 */
function start() {
  alert("Velkomin! Sláðu inn streng eða smelltu á 'cancel' til að hætta.");

  let userInput = prompt("Sláðu inn streng:");

  if (userInput === null || userInput.trim() === "") {
    return;
  }

  const longestResult = longest(userInput);
  const shortestResult = shortest(userInput);
  const reverseResult = reverse(userInput);
  const vowelsResult = vowels(userInput);
  const consonantsResult = consonants(userInput);
  const palindromeResult = palindrome(userInput);

  alert(
    "Hér eru þínar niðurstöður:\n" +
      "Lengsta orð: " +
      longestResult +
      "\n" +
      "Stysta orð: " +
      shortestResult +
      "\n" +
      "Öfugt: " +
      reverseResult +
      "\n" +
      "Sérhljóð: " +
      vowelsResult +
      "\n" +
      "Samhljóð: " +
      consonantsResult +
      "\n" +
      "Er samhverfur: " +
      palindromeResult
  );

  let tryAgain = confirm("Viltu reyna aftur?");
  if (tryAgain) {
    start();
  }
}
start();

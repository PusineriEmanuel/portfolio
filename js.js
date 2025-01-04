function responsiveButtonCol() {
  const responsiveButtonCol = document.getElementsByClassName(
    "responsiveButtonCol"
  );
  for (let i = 0; i < responsiveButtonCol.length; i++) {
    if (window.innerWidth <= 768) {
      responsiveButtonCol[i].classList.add("col");
    } else {
      responsiveButtonCol[i].classList.remove("col");
    }
  }
}
window.addEventListener("resize", responsiveButtonCol);
window.addEventListener("load", responsiveButtonCol);

function responsiveHabSection() {
  const responsiveHabSection = document.getElementsByClassName("habSection");
  for (let i = 0; i < responsiveHabSection.length; i++) {
    if (window.innerWidth <= 425) {
      responsiveHabSection[i].classList.add("container");
    } else {
      responsiveHabSection[i].classList.remove("container");
    }
  }
}
window.addEventListener("resize", responsiveHabSection);
window.addEventListener("load", responsiveHabSection);

let color = 0;

function cambiarColor() {
  const colorChange = document.getElementById("colorChange");
  if (color === 0) {
    colorChange.style.backgroundColor = "rgb(51, 54, 59)";

    color += 1;
  } else if (color === 1) {
    colorChange.style.backgroundColor = "rgb(57, 62, 71)";

    color -= 1;
  }
}
/* PRACTICE -------------------------------------------------------------------- */
function allTheNewCodeIAmLearning() {
  /* slicing */
  var promptInfo = prompt("escribe tu mensaje aqui");
  var caracteresRestantes = 140 - promptInfo.length;

  alert(
    "ya has escrito " +
      promptInfo.length +
      " caracteres, te quedan " +
      caracteresRestantes +
      " caracteres"
  );
  alert("tu mensaje quedara asi:" + promptInfo.slice(0, 140));

  /* slicing first letter upper case */
  var string = prompt("ingresar nombre");
  string = string.toLowerCase();
  var element = string.slice(0, 1);
  var Element = element.toUpperCase();
  string = Element + string.slice(1);
  alert("Hello " + string);

  /* functions */
  function lifeInWeeks(age) {
    var edadRestante = 90 - age;
    var diasRestantes = edadRestante * 365;
    var semanasRestantes = edadRestante * 52;
    var mesesRestantes = edadRestante * 12;
    console.log(
      "You have " +
        diasRestantes +
        " days, " +
        semanasRestantes +
        " weeks, " +
        "and " +
        mesesRestantes +
        " months left."
    );
  }

  function getMilk(money) {
    alert("leave house");
    alert("move right");
    alert("move right");
    alert("move up");
    alert("move up");
    alert("move up");
    alert("move up");
    alert("move right");
    alert("move right");
    var bottles = Math.floor(money / 1.5);
    alert("buy " + bottles + " bottles of milk");
    alert("move left");
    alert("move left");
    alert("move down");
    alert("move down");
    alert("move down");
    alert("move down");
    alert("move left");
    alert("move left");
    alert("enter house");
    return Math.floor(money % 1.5);
  }
  /* milk part 2 */
  function getMilk(money, costPerBottle) {
    console.log(
      "Go and buy " + numBottles(money, costPerBottle) + " bottles of Milk."
    );

    return Math.floor(amountOfChange(money, costPerBottle));
  }

  function numBottles(initialMoney, bottlePrice) {
    return Math.floor(initialMoney / bottlePrice);
  }

  function amountOfChange(initialMoney, bottlePrice) {
    return initialMoney % bottlePrice;
  }

  console.log(
    "Hello master, here is your " + getMilk(5, 1.5) + " dollars of change"
  );

  /* math random */
  var n = Math.random();
  n *= 6;
  console.log(Math.floor(n) + 1);

  /*  part 2*/
  let nom1 = prompt("cual es tu nombre?");
  let nom2 = prompt("cual es tu nombre?");

  let n = Math.floor(Math.random() * 100) + 1;

  alert(nom1 + " & " + nom2 + " son " + n + "% compatibles");

  /* arrays and ifs statements */
  var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
  var guestPrompt = prompt("whats your name?");

  guestPrompt = guestPrompt.toLowerCase();
  var element = guestPrompt.slice(0, 1);
  var Element = element.toUpperCase();
  guestPrompt = Element + guestPrompt.slice(1);

  if (guestList.includes(guestPrompt)) {
    console.log("Welcome " + guestPrompt + "!");
  } else {
    console.log("Sorry, maybe next time");
  }

  /* FizzBuzz */
  var output = [];
  var baseNum = 0;
  function fizzBuzz() {
    baseNum++;

    if (baseNum % 3 === 0 && baseNum % 5 === 0) {
      output.push("FizzBuzz");
    } else if (baseNum % 3 === 0) {
      output.push("Fizz");
    } else if (baseNum % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(baseNum);
    }

    console.log(output);
  }
  /* FizzBuzz with while*/
  function FizzBuzz() {
    var Output = [];
    var BaseNum = 1;

    while (BaseNum <= 100) {
      if (BaseNum % 3 === 0 && BaseNum % 5 === 0) {
        Output.push("FizzBuzz");
      } else if (BaseNum % 3 === 0) {
        Output.push("Fizz");
      } else if (BaseNum % 5 === 0) {
        Output.push("Buzz");
      } else {
        Output.push(BaseNum);
      }
      BaseNum++;
    }
    console.log(Output);
  }
  /* FizzBuzz with for*/
  function FizzBuzz() {
    var Output = [];

    for (var BaseNum = 1; BaseNum <= 100; BaseNum++) {
      if (BaseNum % 3 === 0 && BaseNum % 5 === 0) {
        Output.push("FizzBuzz");
      } else if (BaseNum % 3 === 0) {
        Output.push("Fizz");
      } else if (BaseNum % 5 === 0) {
        Output.push("Buzz");
      } else {
        Output.push(BaseNum);
      }
    }
    console.log(Output);
  }

  /* use mathfloor to complete the random part of the exercise */
  function whosPaying(names) {
    /******Don't change the code above*******/

    //Write your code here.
    //names array of names
    //tenes que pasar el array de names en un valor aleatorio

    let randomNum = Math.floor(Math.random() * names.length);
    return names[randomNum] + " is going to buy lunch today!";

    /******Don't change the code below*******/
  }

  var numOfBottles = 99;

  while (numOfBottles > 0) {
    if (numOfBottles === 1) {
      console.log(
        numOfBottles +
          " bottle of beer on the wall," +
          numOfBottles +
          " bottle of beer."
      );
      console.log(
        "Take one down and pass it around, no more bottles of beer on the wall."
      );
    } else {
      console.log(
        numOfBottles +
          " bottles of beer on the wall," +
          numOfBottles +
          " bottles of beer."
      );
      console.log(
        "Take one down and pass it around," +
          (numOfBottles - 1) +
          " bottles of beer on the wall."
      );
    }
    numOfBottles--;
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

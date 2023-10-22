let question = [
  {
    nextq: 1,
    remaining: 4,
    queno: "Q1",
    que: "HTML stands for",
    a: "HyperText and links Markup Language",
    b: "HyperText Markup Language",
    c: "None of these",
    d: "HighText Machine Language",
    ans: "b",
  },
  {
    nextq: 2,
    remaining: 3,
    queno: "Q2",
    que: "The correct sequence of HTML tags for starting a webpage is ?",
    a: "Head, Title, HTML, body",
    b: "HTML, Body, Title, Head",
    c: "None of these",
    d: "HTML, Head, Title, Body",
    ans: "d",
  },
  {
    nextq: 3,
    remaining: 4,
    queno: "Q3",
    que: "Which of the following element is responsible for making the text bold in HTML?",
    a: "<pre>",
    b: "<a>",
    c: "<b>",
    d: "<br>",
    ans: "c",
  },
  {
    nextq: 4,
    remaining: 1,
    queno: "Q4",
    que: "Which of the following tag is used for inserting the largest heading in HTML?",
    a: "<h3>",
    b: "<h5>",
    c: "<h6>",
    d: "<h1>",
    ans: "d",
  },
  {
    nextq: 5,
    remaining: 0,

    queno: "Q5",
    que: "Which of the following tag is used to insert a line-break in HTML?",
    a: "<br>",
    b: "<a>",
    c: "<pre>",
    d: "<b>",
    ans: "a",
  },
];
let UserNameShow = document.getElementById("username");
let userName = prompt("Please enter your name:");
if (userName) {
  alert(`Welcome, ${userName}! Let's start the quiz.`);
} else {
  alert("You didn't enter a name. Please refresh the page and try again.");
}
let index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
let sawal = document.getElementById("sawal");
let submit = document.getElementById("submit");
let QueNo = document.getElementById("queno");
let answer = document.querySelectorAll(".optionbtn");
let NextQ = document.getElementById("nextQ");
let totalq = document.getElementById("total");
let totalnext = document.getElementById("totalq");

let loaddom = () => {
  if (index === total) {
    result();
    return;
  }
  formreset();
  let data = question[index];
  Remaining.innerText = data.remaining;
  QueNo.innerText = data.queno;
  sawal.innerText = data.que;
  totalq.innerText = total;
  totalnext.innerText = total;
  UserNameShow.innerText = userName;
  answer[0].nextElementSibling.innerText = data.a;
  answer[1].nextElementSibling.innerText = data.b;
  answer[2].nextElementSibling.innerText = data.c;
  answer[3].nextElementSibling.innerText = data.d;
};
submit.addEventListener("click", () => {
  let data = question[index];
  let render = getvalue();
  if (render === data.ans) {
    right++;
  } else {
    wrong++;
  }
  NextQ.innerText = right;
  index++;
  loaddom();
  return;
});
let getvalue = () => {
  let corrects;
  answer.forEach((input) => {
    if (input.checked) {
      corrects = input.value;
    }
  });
  return corrects;
};

let formreset = () => {
  answer.forEach((input) => {
    if (input) {
      input.checked = false;
    }
  });
};

let result = () => {
  document.getElementById("result").innerHTML = `

    <h1 style="font-family: 'Courgette', cursive; ">Thank you ${userName}</h1>
    <br>
    <h3 style="color: green; font-family: 'Roboto', sans-serif;"> Right Answer ${right} / ${total}</h3>
    <br>
    <h3 style="color: red; font-family: 'Roboto', sans-serif; "> Wrong Answer  ${wrong} / ${total}</h3>
    `;
};

loaddom();

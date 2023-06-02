document.getElementById("btn").addEventListener("click", checkscores);

function checkscores() {
  // Definitions
  let q1 = document.getElementById("q1-in").value.toLowerCase();
  let q2 = document.getElementById("q2-in").value.toLowerCase();
  let q3 = document.getElementById("q3-in").value.toLowerCase();
  let q4 = document.getElementById("q4-in").value.toLowerCase();
  let q1Tot;
  let q2Tot;
  let q3Tot;
  let q4Tot;

  // Answers
  // Question 1
  if 
    (q1==="soccer ball")
  
   {
    document.getElementById("q1-in").style.color = "green";
    document.getElementById("q1-ans").innerHTML = `Correct`;
    document.getElementById("q1-ans").style.color = "green";
    q1Tot = 1;
  } else {
    document.getElementById("q1-in").style.color = "red";
    document.getElementById(
      "q1-ans"
    ).innerHTML = `Incorrect, Answer was Soccer Ball or Ball`;
    document.getElementById("q1-ans").style.color = "red";
    q1Tot = 0;
  }
  // Question 2
  if (q2 === "11") {
    document.getElementById("q2-in").style.color = "green";
    document.getElementById("q2-ans").innerHTML = `Correct`;
    document.getElementById("q2-ans").style.color = "green";
    q2Tot = 1;
  } else {
    document.getElementById("q2-in").style.color = "red";
    document.getElementById(
      "q2-ans"
    ).innerHTML = `Incorrect, there are 11 players on each team`;
    document.getElementById("q2-ans").style.color = "red";
    q2Tot = 0;
  }
  // Question 3
  if (q3 === "argentina") {
    document.getElementById("q3-in").style.color = "green";
    document.getElementById("q3-ans").innerHTML = `Correct`;
    document.getElementById("q3-ans").style.color = "green";
    q3Tot = 1;
  } else {
    document.getElementById("q3-in").style.color = "red";
    document.getElementById(
      "q3-ans"
    ).innerHTML = `Incorrect, Argentina won it.`;
    document.getElementById("q3-ans").style.color = "red";
    q3Tot = 0;
  }
  // Question 4
  if (q4 === "real madrid") {
    document.getElementById("q4-in").style.color = "green";
    document.getElementById("q4-ans").innerHTML = `Correct`;
    document.getElementById("q4-ans").style.color = "green";
    q4Tot = 1;
  } else {
    document.getElementById("q4-in").style.color = "red";
    document.getElementById(
      "q4-ans"
    ).innerHTML = `Real Madrid has the most UCL titles.`;
    document.getElementById("q4-ans").style.color = "red";
    q4Tot = 0;
  }

  // Calculating the Scores
  let total = q1Tot + q2Tot + q3Tot + q4Tot;
  let percent = (total / 4) * 100;

  // Display the Socres
  document.getElementById("total-out").innerHTML = total + "/4";
  document.getElementById("percent-out").innerHTML = percent + "%";
}


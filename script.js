function showConverter(sectionId) {
  document.querySelectorAll(".converter").forEach(sec => {
    sec.classList.add("d-none");
  });
  document.getElementById(sectionId).classList.remove("d-none");
  document.getElementById("home").classList.add("d-none");
}

function goHome() {
  document.querySelectorAll(".converter").forEach(sec => {
    sec.classList.add("d-none");
  });
  document.getElementById("home").classList.remove("d-none");
}


// Age → Days
function convertAge() {
  const val = parseFloat(document.getElementById("ageInput").value);
  const out = document.getElementById("ageResult");
  if (!isFinite(val) || val <= 0) {
    out.textContent = "Please enter a valid age in years.";
    return;
  }
  const days = Math.round(val * 365);
  out.textContent = `${val} year(s) ≈ ${days} day(s).`;
}

// Hours → Seconds
function convertHours() {
  const val = parseFloat(document.getElementById("hoursInput").value);
  const out = document.getElementById("hoursResult");
  if (!isFinite(val) || val < 0) {
    out.textContent = "Please enter a valid number of hours.";
    return;
  }
  const seconds = val * 3600;
  out.textContent = `${val} hour(s) = ${seconds} second(s).`;
}

// Name Capitalizer
function capitalizeName() {
  const raw = document.getElementById("nameInput").value.trim();
  const out = document.getElementById("nameResult");
  if (!raw) {
    out.textContent = "Please enter your full name.";
    return;
  }
  const capitalized = raw
    .split(" ")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
  out.textContent = capitalized;
}

// BMI Calculator
function calculateBMI() {
  const w = parseFloat(document.getElementById("weightInput").value);
  let h = parseFloat(document.getElementById("heightInput").value);
  const unit = document.getElementById("heightUnit").value;
  const out = document.getElementById("bmiResult");

  if (!isFinite(w) || w <= 0 || !isFinite(h) || h <= 0) {
    out.textContent = "Please enter valid weight and height.";
    return;
  }

  if (unit === "ft") {
    h = h * 0.3048;
  }

  const bmi = w / (h * h);
  let cat = "";
  if (bmi < 18.5) cat = "Underweight";
  else if (bmi < 24.9) cat = "Normal weight";
  else if (bmi < 29.9) cat = "Overweight";
  else cat = "Obese";

  out.textContent = `BMI: ${bmi.toFixed(2)} (${cat})`;
}

// Next Number Finder
function findNextNumber() {
  let num = document.getElementById("numberInput").value;
  let parsed = parseFloat(num);

  if (isNaN(parsed)) {
    document.getElementById("nextNumberResult").innerText = "Please enter a valid number.";
  } else {
    if (Number.isInteger(parsed)) {
      document.getElementById("nextNumberResult").innerText = 
        `Next number after ${parsed} is ${parsed + 1}`;
    } else {
      let nextFloat = (parsed + 0.1).toFixed(1);
      document.getElementById("nextNumberResult").innerText = 
        `Next number after ${parsed} is ${nextFloat}`;
    }
  }
}
// Array Finder
function findNextInArray() {
  let arrayStr = document.getElementById("arrayInput").value;
  let target = parseFloat(document.getElementById("targetInput").value);

  let arr = arrayStr.split(",").map(num => parseFloat(num.trim()));

  if (isNaN(target)) {
    document.getElementById("nextArrayResult").innerText = "Please enter a valid target number.";
    return;
  }

  if (arr.includes(target)) {
    let index = arr.indexOf(target);
    if (index < arr.length - 1) {
      document.getElementById("nextArrayResult").innerText =
        `Next number after ${target} is ${arr[index + 1]}`;
    } else {
      document.getElementById("nextArrayResult").innerText =
        `${target} is the last element, no next number.`;
    }
  } else {
    document.getElementById("nextArrayResult").innerText =
      `Number ${target} not found in the array.`;
  }
}

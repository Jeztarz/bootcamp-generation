function askMyName() {
  const name = prompt("What is you name");
  if (name != null) {
     document.getElementById("myName").innerHTML = "Hi ! " + name;
  }
}

function helloWorld() {
const h1message = document.getElementById("myName").innerHTML;
  alert(h1message + " ขับเร็วว่าแดกม้า ขับช้าว่าหมาไม่แดก");
}

// ==== day 18/2/22 ====

// exercise 1

function calAge(){
  const yearbirth = prompt("Your Year of birth is: ");
  const numyearbirth = Number(yearbirth);
  const text = "ยินดีด้วย คุณอยู่ประเทศนี้มา";
  const age = 2022 - numyearbirth;
  alert(`${text} ${age}` + " ปีแล้ว");
}


// exersice 2

function loadProfile() {
  const fname = "Lalin";
  const mprovince = "Bangkok";

  document.getElementById('my-name').innerHTML = "NAME : " + fname;
  document.getElementById('my-province').innerHTML = "PROVINCE : " + mprovince;
}
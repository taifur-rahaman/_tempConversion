//c to f

// f = 9/5*c +32;

function c_f_convert() {
  let c_user = window.prompt("Enter the temperatur in Celcius : ");
  c_user = parseFloat(c_user);

  function c_f(c_user) {
    return (9 / 5) * c_user + 32;
  }

  let f_cal = c_f(c_user);

  document.getElementById(
    "c-to-f"
  ).innerHTML = `${c_user} degree celcius is equal to ${f_cal} farhenhait`;
}

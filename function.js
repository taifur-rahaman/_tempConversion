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
    ).innerHTML = `${c_user} degree celcius is equal to ${f_cal.toFixed(
    2
  )} farhenhait`;
}

function f_c_convert() {
    let f_user = window.prompt("Enter the temperatur in Farhenhait : ");
    f_user = parseFloat(f_user);

    function f_c(f_user) {
        return (5 * f_user - 160) / 9;
    }

    let c_cal = f_c(f_user);

    document.getElementById(
        "f-to-c"
    ).innerHTML = `${f_user} degree farhenhait is equal to ${c_cal.toFixed(
    2
  )} celcius`;
}
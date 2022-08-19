
function errorValue(yr,mon,day,hr,min) {
  let isError = false;
  if(yr < 2000 || yr > 2060) {
    isError = true;
    alert("Year is invalid.");
  }
  if(mon < 1|| mon > 12) {
    isError = true;
    alert("Month is invalid.");
  }
  if(day < 1 || day > 31) {
    isError = true;
    alert("Date is invalid.");
  }
  if(hr < 0 || hr > 24) {
    isError = true;
    alert("Hour is invalid.");
  }
  if(min < 0 || min > 59) {
    isError = true;
    alert("Minute is invalid.");
  }

  return isError;
}

document.addEventListener('DOMContentLoaded', function() {
  const clicked = document.getElementById("convert");

  clicked.addEventListener('click', function() {
    const yr = document.getElementById("year").value;
    const mon = document.getElementById("month").value-1;
    const day = document.getElementById("day").value;
    const hr = document.getElementById("hour").value;
    const min = document.getElementById("minute").value;

    let isError = errorValue(yr,mon,day,hr,min);

    const d = new Date(yr,mon,day,hr,min);
    if(isError) 
      document.getElementById("box").innerHTML = "Error: Invalid input";
    else 
      document.getElementById("box").innerHTML = d.toLocaleString('ja-JP',
      {
        timeZone:'Japan',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
  })
});




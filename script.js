var hr, min, sec;
var h, m, s, i;
var f = true;

window.onload = function() {
  hr = document.getElementById("hr");
  min = document.getElementById("min");
  sec = document.getElementById("sec");

  currentTime = new Date();
  s = currentTime.getSeconds();

  i = setInterval(initialise, 1);

}

function initialise(){
  currentTime = new Date();
  news = currentTime.getSeconds();
  if(news != s){
    s = news;
    clearInterval(i);
    i = setInterval(counting, 1000);
    currentTime = new Date();
    m = currentTime.getMinutes();
    h = currentTime.getHours();

    if (m > 9)
    min.innerHTML = m;
    else
    min.innerHTML = '0' + m;

    if (h > 9)
    hr.innerHTML = h;
    else
    hr.innerHTML = '0' + h;
  }
}

function counting() {
  s = (s - (-1))%60;
  if (s > 9)
  sec.innerHTML = s;
  else
  sec.innerHTML = '0'+s;
  if(s == 0 || f){
    currentTime = new Date();
    s = currentTime.getSeconds();
    m = currentTime.getMinutes();
    h = currentTime.getHours();

    if (m > 9)
    min.innerHTML = m;
    else
    min.innerHTML = '0' + m;

    if (h > 9)
    hr.innerHTML = h;
    else
    hr.innerHTML = '0' + h;

    f = false;
  }
}

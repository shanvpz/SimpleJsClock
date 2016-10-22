function startTime(x) {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var mode=x;
    if(mode==12){
    h = nonrlwy(h);
    }
    document.getElementById('hrs').innerHTML =h+" Hours";
    document.getElementById('mins').innerHTML =m+" Minutes";
    document.getElementById('secs').innerHTML =s+" Seconds";
    var t = setTimeout('startTime('+mode+')', 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function nonrlwy(i){
    if (i>12) {i=i%12};
    return i;
}
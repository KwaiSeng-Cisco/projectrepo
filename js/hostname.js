
function printhost(){
    var host = location.host;
    document.getElementById("host").innerHTML = host;
}

function printhostname(){
    var hostname = location.hostname;
    document.getElementById("hostname").innerHTML = hostname;
}

function current_time(){
    var date = Date();
    document.getElementById("date").innerHTML = date;
}
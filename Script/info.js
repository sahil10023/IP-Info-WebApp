
document.addEventListener('DOMContentLoaded', () => {
 const data = JSON.parse(localStorage.getItem('ipData'))
 
 if(data){
    console.log(data);
    document.querySelector("#stat").value = data.status;
    document.querySelector("#cont").value = data.continent;
    document.querySelector("#coun").value = data.country;
    document.querySelector("#regname").value = data.regionName;
    document.querySelector("#city").value = data.city;
    document.querySelector("#long").value = data.lon;
    document.querySelector("#lat").value = data.lat;
    document.querySelector("#isp").value = data.isp;
} else {
    console.log("INFO.Js Fucked Up");
}});



// https://api.techniknews.net/ipgeo/159.89.168.61


 async function Fetch_API(ip){
  const response = await fetch(`https://api.techniknews.net/ipgeo/${ip}`);
  if(!response.ok){
   throw new Error("Network Fucked UP");
  }
  return await response.json();
 }


 document.querySelector("form > button").addEventListener("click",async (e)=>{
   e.preventDefault();
   let ip = document.getElementById("basic-url").value;
   Fetch_API(ip)
   .then((data)=>{
      console.log(data);
      localStorage.setItem('ipData', JSON.stringify(data));
      window.location.href ="./result.html";
   })
   .catch((err)=>{
      console.log(err);
   })
 });



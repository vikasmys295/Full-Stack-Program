var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    for (let index = 0; index < data.length; index++) {
       
        console.log("country names",data[index].name);
        
    }
    
}
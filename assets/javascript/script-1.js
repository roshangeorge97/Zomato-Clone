function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    var element=document.querySelector(".fas");
    if(element.classList.contains('fa-rotate-180')){
        element.classList.remove('fa-rotate-180');
    }else{
        element.classList.add('fa-rotate-180');
    }
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


var map;
		
function initMap() {							
    var latitude = 28.6139; // YOUR LATITUDE VALUE
    var longitude = 77.2090; // YOUR LONGITUDE VALUE
    
    var myLatLng = {lat: latitude, lng: longitude};
    
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12,
      disableDoubleClickZoom: true, // disable the default map zoom on double click
    });
    
    google.maps.event.addListener(map,'click',function(event) {				
        document.getElementById('latclicked').value = event.latLng.lat();
        document.getElementById('longclicked').value =  event.latLng.lng();
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: latitude + ', ' + longitude 
    });	
    
    // Update lat/long value of div when the marker is clicked
    marker.addListener('click', function(event) {			  
      document.getElementById('latclicked').innerHTML = event.latLng.lat();
      document.getElementById('longclicked').innerHTML =  event.latLng.lng();
    });

    google.maps.event.addListener(map,'click',function(event) {
        var marker = new google.maps.Marker({
          position: event.latLng, 
          map: map, 
          title: event.latLng.lat()+', '+event.latLng.lng()
        });                
    });
}

var nameDiv=document.getElementById('rest-name-div');
var typeDiv=document.getElementById('rest-type-div');

document.getElementById("rest-name").addEventListener('click',function2);
function function2(){
  nameDiv.classList.remove('hide');
  typeDiv.classList.add('hide');
}
document.getElementById("rest-type").addEventListener('click',myFunction);
function myFunction(){
  nameDiv.classList.toggle('hide');
  typeDiv.getElementById('rest-type-div').classList.remove('hide');
}



        let input = document.getElementById("myFile");
        let imageName = document.getElementById("imageName")

        input.addEventListener("change", ()=>{
            let inputImage = document.querySelector("input[type=file]").files[0];

            imageName.innerText = inputImage.name;
        });

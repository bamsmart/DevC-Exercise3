fetch('https://swapi.co/api/planets/?format=json',{
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
})
    .then(response => response.json())
    .then(data => {
    	console.log(data);
    	
    	var  no = 1; 
    	var html = ""; 
    	
        var planet = data.results; 
        
       
        planet.forEach(obj => {
        	html += '<tr  role=row>'+
           '<td>'+no+'</td>'+
 	       '<td>'+obj.name+'</td>'+
 	       '<td>'+obj.diameter+'</td>'+
 	       '<td>'+obj.orbital_period+'</td>'+
 	       '<td>'+obj.climate+'</td>'+
 	       '<td>'+formatDate(new Date(obj.created))+'</td>'+
 	       '</tr>';
        	
        	no++; 
        });
        
        document.getElementById('planet-data').innerHTML =html;
    
    })
    .catch(error => console.error(error));

function formatDate(date) {
	  var monthNames = [
	    "January", "February", "March",
	    "April", "May", "June", "July",
	    "August", "September", "October",
	    "November", "December"
	  ];

	  var day = date.getDate();
	  var monthIndex = date.getMonth();
	  var year = date.getFullYear();

	  return day + ' ' + monthNames[monthIndex] + ' ' + year;
	}
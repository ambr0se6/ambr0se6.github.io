
function apicall__function() {
    var formArtist = document.getElementById("artistname").value;
    console.log(formArtist);
    queryURL =  'http://musicbrainz.org/ws/2/artist/?query=artist:'.concat(formArtist);
    console.log(queryURL);
    retrievedData = httpGet(queryURL);
    console.log(retrievedData);
    //PARSING
    artist = retrievedData.getElementsByTagName("artist")[0];
    console.log(artist);
    MBID = artist.id;
    country = artist.getElementsByTagName("area")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    console.log(country);
    //RENDER DATA
    document.getElementById('api__artist_result').innerHTML = "The Artist: " + formArtist; 
    document.getElementById('api__arid_result').innerHTML = "The MBID: " + MBID;
    document.getElementById('api__country_result').innerHTML = "The Country: " + country;

}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send();
    return xmlHttp.responseXML;
}
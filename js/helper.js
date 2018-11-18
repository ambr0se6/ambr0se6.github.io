function queryCall(){
		// Getting artist name from form
		x = document.getElementById("queryForm");
		artName = x.elements["artistName"].value;
		// console.log(artName);

		// Printing artist
		artistName = document.createElement('span');
		artistName.setAttribute('id', 'highlight2');
		artistName.innerHTML = artName;

		// Querying Last.fm
		queryData(artName);
		}

    function queryData(artistName) {
				// Creating the query to obtain artist info
				queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=4d33f33e040ed32486d12d93658710f7"

        retrievedData = httpGet(queryURL);
        parsedPage = miniPage(retrievedData);

        document.getElementById('retrievedBio').innerHTML = "";
        document.getElementById('retrievedBio').appendChild(parsedPage);
    }

    function httpGet(theUrl) {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send();
        return xmlHttp.responseXML;
    }

    function miniPage(retrievedData) {
				// Create image element in document
        image = document.createElement('img');
        imageLink = retrievedData.getElementsByTagName('image')[3].innerHTML;
        image.src = imageLink;
				image.classList.add("image-pad");

				// Create bio element in document
        bio = document.createElement('p');
        bio.setAttribute('id', 'highlight2');
        bioContent = retrievedData.getElementsByTagName('content')[0].innerHTML;
        bio.innerHTML = bioContent;

				// Appending image and bio elements to minipage
        mp = document.createElement('div');
        mp.id = 'bioContainer';
        mp.appendChild(image);
        mp.appendChild(bio);

				// Return the minipage
        return mp;
    }
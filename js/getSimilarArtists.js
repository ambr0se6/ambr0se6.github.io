function mainCall(){
		// Getting artist name from form
		x = document.getElementById("queryForm");
		artName = x.elements["artistName"].value;
		// console.log(artName);

		// Printing artist
		artistName = document.createElement('span');
		artistName.setAttribute('id', 'highlight2');
		artistName.innerHTML = artName;

		// Querying Last.fm
		getAllArtists(artName);
		}

    function getAllArtists(artistName) {
				// Creating the query to obtain artist info
				queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=" + artistName + "&api_key=4d33f33e040ed32486d12d93658710f7"

        retrievedData = httpGet(queryURL);
        console.log(retrievedData);

        parsedPage = createSimilarArtistsPage(retrievedData);
    
        document.getElementById('similarArtists').innerHTML = "";
        document.getElementById('similarArtists').appendChild(parsedPage);

    }

    function getArtistInfo(artistName) {
        // Creating the query to obtain artist info
        queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=4d33f33e040ed32486d12d93658710f7"

        retrievedData = httpGet(queryURL);
        return retrievedData;
    }

    function httpGet(theUrl) {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send();
        return xmlHttp.responseXML;
    }

    function createSimilarArtistsPage(similarArtists) {
        mp = document.createElement('div');
        mp.id = 'SimilarArtists';
        for(var i=0; i<4; i++){
            console.log(i);
            artistName = similarArtists.getElementsByTagName("similarartists")[0].getElementsByTagName("name")[i].innerHTML;
            console.log(artistName);

            retrievedData = getArtistInfo(artistName);

            title = document.createElement('h3');
            title.classList.add("artist_title");
            title.innerHTML = artistName;

            // Create image element in document
            image = document.createElement('img');
            imageLink = retrievedData.getElementsByTagName('image')[3].innerHTML;
            image.src = imageLink;
            image.classList.add("artist_image");

            // Create bio element in document
            bio = document.createElement('p');
            bio.setAttribute('id', 'bio_' + i);
            bio.classList.add("artist_bio");
            bioContent = retrievedData.getElementsByTagName('content')[0].innerHTML;
            bio.innerHTML = bioContent;

            // Appending image and bio elements to minipage
            mmp = document.createElement('div');
            mmp.id = 'artistsContainer_' + i;
            
            mmp.appendChild(image);
            mmp.appendChild(title);
            mmp.appendChild(bio);
            mp.appendChild(mmp);
        }
		// Return the minipage
        return mp;
    }

let searchButton = document.querySelector(".searchButton")

searchButton.addEventListener("click", function (event) {
  event.preventDefault()

  if (event.target.classList.contains("searchButton")) {
    //user input of artist
    let userInput = document.querySelector(".userInput").value;
    //user input of song
    let songName = document.querySelector(".songName").value;

    // API info about the artist 
    let url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${userInput}`

    // API lyrics for song 
    let url2 = `https://api.lyrics.ovh/v1/${userInput}/${songName}`

    fetch(url)
      .then(res => res.json())
      .then(data => {

        //updating data for html 
        let name = document.getElementById("name")
        name.innerHTML = data.artists[0].strArtist

        let gender = document.getElementById("gender")
        gender.innerHTML = data.artists[0].strGender

        let age = document.getElementById("age")
        //if age doesn't exist 
        if (data.artists[0].intDiedYear === null && data.artists[0].intBornYear == null) {
          age.innerHTML = ""
        }
        //still alive
        else if (data.artists[0].intDiedYear === null) {
          age.innerHTML = "2020" - data.artists[0].intBornYear
        }
        //passed away
        else {
          data.artists[0].intDiedYear - data.artists[0].intBornYear
        }

        let origin = document.getElementById("origin")
        origin.innerHTML = data.artists[0].strCountry

        let genre = document.getElementById("genre")
        genre.innerHTML = data.artists[0].strGenre

        let website = document.getElementById("website")
        website.innerHTML = data.artists[0].strWebsite

        // let bio = document.getElementById("bio")
        // bio.innerHTML=data.artists[0].strBiographyEN

        let image = document.getElementById("image")
        image.src = data.artists[0].strArtistThumb




      })
    fetch(url2)
      .then(res => res.json())
      .then(result => {

        //updating name 
        let lyrics = document.getElementById("lyrics")
        lyrics.innerHTML = result.lyrics


      })


      .catch(error => console.log("error", error))




    //closes if     
  }






})



// //songAPI=`https://api.lyrics.ovh/v1/${artist}/${song}`,








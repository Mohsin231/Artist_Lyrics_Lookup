// //songAPI=`https://api.lyrics.ovh/v1/${artist}/${song}`,

/*
SPOTIFY

Client id:
021fc83b92e34390b2e14924141f73e7

client secret id
db02c7fc516642eab8fcb4131060cc63

converted to unicode
021fc83b92e34390b2e14924141f73e7:db02c7fc516642eab8fcb4131060cc63

redirecturi
https%3A%2F%2Fapi-university.com%2F


https://accounts.spotify.com/authorize?client_id=
021fc83b92e34390b2e14924141f73e7&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Fgeneralassemb.ly%2F



curl -H "Authorization: Basic MDIxZmM4M2I5MmUzNDM5MGIyZTE0OTI0MTQxZjczZTc6ZGIwMmM3ZmM1MTY2NDJlYWI4ZmNiNDEzMTA2MGNjNjM=" -d grant_type=authorization_code -d code=https://api-university.com/?code=AQAH5abQrMGKG29ZvSz11DsuzNTEM29zMQqOXCC3lX398eyxhsxOiix1U0WVTPfEbgjKm8rifmV-ZgVxEN7vt-a0qbhhOG3Gm4OOKuH8rifVEP0S0BOBdSZ0hdiJjEKVtdiGoGXqpNHhdB1kmdBmfY0vUWCFDe5ysQzQDqGfxA -d redirect_uri=https%3A%2F%2Fgeneralassemb.ly%2F https://accounts.spotify.com/api/token



From <https://developer.spotify.com/dashboard/applications/021fc83b92e34390b2e14924141f73e7> 

//NEED TOKEN
*/


let searchButton = document.querySelector(".searchButton")

searchButton.addEventListener("click", function(event){
  event.preventDefault()

  if (event.target.classList.contains("searchButton")){
    //user input of artist
    let userInput = document.querySelector(".userInput").value;
//let songName = document.querySelector(".songName").value;


    let url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${userInput}`
    //https://cors-anywhere.herokuapp.com/

    //let url2 =`https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=${userInput}&t=${songName}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("working")

        //print array object
        console.log("data.artists", data.artists[0])

        //updating name 
        let name = document.getElementById("name")
        name.innerHTML=data.artists[0].strArtist

        let gender = document.getElementById("gender")
        gender.innerHTML=data.artists[0].strGender

        let age = document.getElementById("age")
        if (data.artists[0].intDiedYear===null && data.artists[0].intBornYear==null){
          age.innerHTML=""
        }
        else if(data.artists[0].intDiedYear===null){
        age.innerHTML="2020"-data.artists[0].intBornYear}
        else {data.artists[0].intDiedYear-data.artists[0].intBornYear}

        let country = document.getElementById("country")
        country.innerHTML=data.artists[0].strCountry

        let genre = document.getElementById("genre")
        genre.innerHTML=data.artists[0].strGenre

        let website = document.getElementById("website")
        website.innerHTML=data.artists[0].strWebsite

        let bio = document.getElementById("bio")
        bio.innerHTML=data.artists[0].strBiographyEN

        let image = document.getElementById("image")
        image.src=data.artists[0].strArtistThumb
      

        

        })
        // fetch(url2)
        // .then(res => res.json())
        // .then(result => {
        //   console.log("working2")
  
        //   //print array object
        //   console.log("track", result.track[0])
  
        //   //updating name 
        //   let link = document.getElementById("link")
        //   link.innerHTML=result.track[0].strMusicVid
  
  
        //   })
      
    
      .catch(error => console.log("error", error))




  //closes if     
  }






})







// making the show data function 
let url = "http://localhost:1010/getresult"
let profileImg = document.getElementById("savedProfiles");

const showImage = async() => {

    let response = await fetch(url);
    let {results} = await response.json();
    console.log(results);

    for(let i=0;i<results.length;i++){
        profileImg.innerHTML += `<img src="${results[i].img.data}" alt="${results[i].studentName}" style="width:200px; height:200px">`;
    }

} 
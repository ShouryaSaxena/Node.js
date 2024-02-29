// making the show data function 
let url = "http://localhost:2030/getresult"
let profileImg = document.getElementById("savedProfiles");
const showImage = async() => {

    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data)
    profileImg.innerHTML = ""
    for(let i=0;i<data.length;i++){
        profileImg.innerHTML += `<img src="/uploads/${data[i].img}" alt="${data[i].studentName}" style="width:200px; height:200px">`;
    }

} 

// making the show data function 
let url = "http://localhost:1010/getresult"
let profileImg = document.getElementById("savedProfiles");
const updatedValues = document.getElementsByClassName("input");


const showImage = async () => {
    document.getElementById('showForm').style.display = "none";
    document.getElementById('imageContainer').style.display = "block";
    document.getElementById('showAllData').style.display = "none";

    let response = await fetch(url);
    let { results } = await response.json();
    profileImg.innerHTML = ""
    for (let i = 0; i < results.length; i++) {
        profileImg.innerHTML += `<img src="${results[i].img.data}" alt="${results[i].studentName}" style="width:200px; height:200px">`;
    }

}

const addStudent = async () => {
    document.getElementById('showForm').style.display = "block";
    document.getElementById('imageContainer').style.display = "none";
    document.getElementById('showAllData').style.display = "none";
}

const getStudentDetails = async () => {
    document.getElementById('showForm').style.display = "none";
    document.getElementById('imageContainer').style.display = "none";
    document.getElementById('showAllData').style.display = "block";
    // document.getElementById('updateForm').style.display = "block";

    let response = await fetch(url);
    let { results } = await response.json();
    studentDetails.innerHTML = ""
    for (let i = 0; i < results.length; i++) {
        studentDetails.innerHTML += `Name: ${results[i].studentName} &nbsp;&nbsp; Roll No: ${results[i].rollno} &nbsp;&nbsp; Subjects: ${results[i].subjects} <button class="submit" type="submit" value="${results[i]._id}" onclick="updateStudentData(this.value)">Update / Edit</button> <br><br>`;
    }
}

const updateStudentData = async (id) => {
    document.getElementById('showAllData').style.display = "none";
    document.getElementById('showForm').style.display = "block";

    document.getElementById("legend").innerHTML = `<b>Update Student Details</b>`;

    console.log(id)
    let url = `http://localhost:1010/${id}`
    let response = await fetch(url);
    let {data} = await response.json(); 
    console.log(data);

    console.log(updatedValues)
    updatedValues[0].value = data.studentName;
    updatedValues[1].value = data.rollno;
    updatedValues[2].value = data.subjects;

    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "block";


    
    
    

    



}
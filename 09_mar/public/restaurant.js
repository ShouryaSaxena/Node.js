

let tables = ["", "Table-1", "Table-2", "Table-3", "Table-4", "Table-5", "Table-6", "Table-7", "Table-8", "Table-9", "Table-10"];

let users = [];
let table = document.getElementById('table');


for (let i = 0; i < tables.length; i++) {
    let opt = document.createElement('option');
    opt.textContent = tables[i];
    opt.value = tables[i];
    table.appendChild(opt);
}

disablingFirst = () => {
    table.options[0].disabled = true;
}

users = JSON.parse(localStorage.getItem('userkey'));


const match = async(select) => {

    const selectedOption = select.value;
    

    //console.log(selectedOption);
    //console.log();

    for (let i = 0; i < tables.length; i++) {
        if (i == 0) {
            table.options[i].disabled = true;
        }
        table.options[i].disabled = false;
    }

    const response = await fetch("http://localhost:2200/showbookings");
    const data = await response.json();
    

    if (data != null) {
        for (let i = 0; i < data.length; i++) {
            if (selectedOption === data[i].date) {
                console.log(selectedOption)
                console.log(`Slot already booked for ${users[i].table}`);
                for (let j = 0; j < tables.length; j++) {
                    if (table.options[j].value === data[i].table) {
                        table.options[j].disabled = true;
                    }
                }

            }
        }

    }
}


disablingFirst = () => {
    table.options[0].disabled = true;
}

// confirm booking function
const confirmBooking = () => {
    let mobile = document.getElementById('mobile').value;
    document.getElementById('output').innerHTML = `Booking Confirmed  with Mobile Number: ${mobile}`;
}


showBookings = async () => {
    let bookings = "";
    readDiv.style.display = "";
    document.getElementById('hide').style.display = "block";

    const response = await fetch("http://localhost:2200/showbookings");
    const data = await response.json();
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        bookings += `Name: ${data[i].Name}_______Mobile No.: ${data[i].mobile}_______Date: ${data[i].date}_______Table: ${data[i].table} \n\n`;
    }
    console.log(bookings);
    document.getElementById("displayBookings").innerText = bookings;
}

hideBookings = () =>{
    document.getElementById("displayBookings").innerText = "";
    document.getElementById("hide").style.display = "none";
}
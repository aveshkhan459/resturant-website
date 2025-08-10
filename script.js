
let bookedSlots = [
    { date: "2025-08-09", time: "19:00" },
    { date: "2025-08-09", time: "20:00" }
];


const specials = ["Grilled Salmon - $20", "Mushroom Risotto - $15", "Chocolate Lava Cake - $8"];
document.getElementById("specialsList").innerHTML = specials.map(item => `<li>${item}</li>`).join("");


document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

  
    const alreadyBooked = bookedSlots.some(slot => slot.date === date && slot.time === time);
    const messageDiv = document.getElementById("bookingMessage");
    const qrDiv = document.getElementById("qrCode");

    if (alreadyBooked) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Sorry, no tables available at that time. Try another slot.";
        qrDiv.innerHTML = "";
        return;
    }

   
    bookedSlots.push({ date, time });
    messageDiv.style.color = "green";
    messageDiv.textContent = `Thank you ${name}! Your table for ${people} is booked on ${date} at ${time}.`;

    
    qrDiv.innerHTML = "";
    new QRCode(qrDiv, {
        text: `Booking: ${name}, Phone: ${phone}, Date: ${date}, Time: ${time}, People: ${people}`,
        width: 128,
        height: 128
    });

    
    localStorage.setItem("lastBooking", JSON.stringify({ name, phone, date, time, people }));
    this.reset();
});


window.addEventListener("load", () => {
    const lastBooking = localStorage.getItem("lastBooking");
    if (lastBooking) {
        const b = JSON.parse(lastBooking);
        document.getElementById("bookingMessage").style.color = "blue";
        document.getElementById("bookingMessage").textContent = `Last booking: ${b.name}, ${b.people} people on ${b.date} at ${b.time}`;
    }
});

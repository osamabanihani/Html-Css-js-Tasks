let menu = document.getElementById("menu");

fetch("menu.json")
.then(response => response.json())
.then(data => {
    
    localStorage.setItem("menu", JSON.stringify(data));
    for (let i = 0; i < data.length; i++) {
        menu.innerHTML += `<p> ${data[i].name} - ${data[i].price} JD - ${data[i].available}</p>`;
    }
});
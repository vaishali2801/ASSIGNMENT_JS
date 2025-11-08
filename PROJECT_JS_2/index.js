function cToF(c) {
    return (c * 9 / 5) + 32;
}
function fToC(f) {
    return (f - 32) * 5 / 9;
}
function getAdvice(tempC) {
    if (tempC < 5)
        return { icon: "❄️", title: "Freezing Cold!", text: "Wear thick coats, gloves, and boots." };
    else if (tempC < 15)
        return { icon: "🧥", title: "Chilly Weather!", text: "A sweater or jacket is perfect today." };
    else if (tempC < 25)
        return { icon: "🌤️", title: "Pleasant Weather!", text: "Light clothes are great — enjoy your day!" };
    else if (tempC < 35)
        return { icon: "☀️", title: "Warm Day!", text: "Wear light cotton and stay hydrated." };
    else
        return { icon: "🔥", title: "Very Hot!", text: "Avoid sun, wear loose clothes, and drink water." };
}
function convertTemperature() {
    const city = document.getElementById("city").value.trim();
    const type = document.getElementById("convertType").value;
    const temp = parseFloat(document.getElementById("temperature").value);
    const errorMsg = document.getElementById("errorMsg");
    const resultBox = document.getElementById("resultBox");
    errorMsg.textContent = "";
    if (city === "") {
        errorMsg.textContent = "⚠️ Please enter your city name.";
        resultBox.style.display = "none";
        return;
    }
    if (isNaN(temp)) {
        errorMsg.textContent = "🌡️ Please enter a valid temperature value.";
        resultBox.style.display = "none";
        return;
    }
    if (type === "cToF" && temp < -273.15) {
        errorMsg.textContent = "🚫 Temperature cannot be below -273.15°C (absolute zero)!";
        resultBox.style.display = "none";
        return;
    }
    if (type === "fToC" && temp < -459.67) {
        errorMsg.textContent = "🚫 Temperature cannot be below -459.67°F (absolute zero)!";
        resultBox.style.display = "none";
        return;
    }
    let converted, tempC;
    if (type === "cToF") {
        converted = cToF(temp).toFixed(2) + " °F";
        tempC = temp;
    } else {
        converted = fToC(temp).toFixed(2) + " °C";
        tempC = fToC(temp);
    }
    const advice = getAdvice(tempC);
    document.getElementById("cityName").textContent = "City: " + city;
    document.getElementById("convertedValue").textContent = "Converted Temperature: " + converted;
    document.getElementById("weatherIcon").textContent = advice.icon;
    document.getElementById("adviceTitle").textContent = advice.title;
    document.getElementById("adviceText").textContent = advice.text;
    resultBox.style.display = "block";
}
function resetForm() {
    document.getElementById("city").value = "";
    document.getElementById("temperature").value = "";
    document.getElementById("convertType").value = "cToF";
    document.getElementById("resultBox").style.display = "none";
    document.getElementById("errorMsg").textContent = "";
}

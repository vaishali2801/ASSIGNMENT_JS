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
    const tempInput = document.getElementById("temperature");
    const temp = parseFloat(tempInput.value);
    const errorMsg = document.getElementById("errorMsg");
    const resultBox = document.getElementById("resultBox");

    errorMsg.textContent = "";
    tempInput.style.borderColor = "#ddd";
    document.getElementById("city").style.borderColor = "#ddd";

    // ✅ Validation 1: City name should only contain letters and spaces
    const cityPattern = /^[A-Za-z\s]+$/;
    if (city === "") {
        errorMsg.textContent = "⚠️ Please enter your city name.";
        document.getElementById("city").style.borderColor = "red";
        resultBox.style.display = "none";
        return;
    } else if (!cityPattern.test(city)) {
        errorMsg.textContent = "❌ City name should only contain letters (no numbers or symbols).";
        document.getElementById("city").style.borderColor = "red";
        resultBox.style.display = "none";
        return;
    }

    // ✅ Validation 2: Temperature must be a valid number
    if (isNaN(temp)) {
        errorMsg.textContent = "🌡️ Please enter a valid temperature value.";
        tempInput.style.borderColor = "red";
        resultBox.style.display = "none";
        return;
    }

    // ✅ Validation 3: Temperature value range
    if (temp < -500 || temp > 1000) {
        errorMsg.textContent = "🚫 Please enter a realistic temperature (between -500 and 1000).";
        tempInput.style.borderColor = "red";
        resultBox.style.display = "none";
        return;
    }

    // ✅ Absolute zero validation
    if (type === "cToF" && temp < -273.15) {
        errorMsg.textContent = "🚫 Temperature cannot be below -273.15°C (absolute zero)!";
        tempInput.style.borderColor = "red";
        resultBox.style.display = "none";
        return;
    }
    if (type === "fToC" && temp < -459.67) {
        errorMsg.textContent = "🚫 Temperature cannot be below -459.67°F (absolute zero)!";
        tempInput.style.borderColor = "red";
        resultBox.style.display = "none";
        return;
    }

    // ✅ Conversion
    let converted, tempC;
    if (type === "cToF") {
        converted = cToF(temp).toFixed(2) + " °F";
        tempC = temp;
    } else {
        converted = fToC(temp).toFixed(2) + " °C";
        tempC = fToC(temp);
    }

    // ✅ Display result and advice
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
    document.getElementById("city").style.borderColor = "#ddd";
    document.getElementById("temperature").style.borderColor = "#ddd";
}

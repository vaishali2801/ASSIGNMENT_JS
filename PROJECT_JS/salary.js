document.getElementById("form").addEventListener("submit" , function(e){
    e.preventDefault();

    const basicSalary = document.getElementById("basicSalary").value;
    const HA = parseFloat(document.getElementById("hra").value);
    const DA = parseFloat(document.getElementById("da").value);
    const TA = parseFloat(document.getElementById("ta").value);

    const grossSalary = basicSalary * (1 + (HA + DA + TA) / 100);

    document.getElementById("grossSalary").innerHTML = `<h1>${grossSalary}</h1>`
});
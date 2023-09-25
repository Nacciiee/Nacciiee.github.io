window.addEventListener("load", (ev) => {
    const birthDate = new Date('2007-09-03');
    const currentDate = new Date();
    document.getElementById("age").innerHTML = (currentDate.getFullYear() - birthDate.getFullYear() - (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) ? 1 : 0)) + "yo";

    console.log(`Your age is: ${age}`);

})
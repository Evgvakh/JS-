
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector("#firstNameOutput").innerText = initPerson.firstName;
    document.querySelector("#genderOutput").innerText = initPerson.gender;
    document.querySelector("#surnameOutput").innerText = initPerson.surName;
    document.querySelector("#birthYearOutput").innerText = initPerson.birth;
    document.querySelector("#middleNameOutput").innerText = initPerson.middleName;
    document.querySelector("#professionOutput").innerText = initPerson.profession;
};

function resetButton() {
    document.querySelector("#firstNameOutput").innerText = 'Имя';
    document.querySelector("#genderOutput").innerText = 'Пол';
    document.querySelector("#surnameOutput").innerText = 'Фамилия';
    document.querySelector("#birthYearOutput").innerText = 'Год рождения';
    document.querySelector("#middleNameOutput").innerText = 'Отчество';
    document.querySelector("#professionOutput").innerText = 'Профессия';
};
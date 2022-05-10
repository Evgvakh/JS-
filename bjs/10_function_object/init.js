
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birth;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

function resetButton() {
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('birthYearOutput').innerText = 'Год рождения';
    document.getElementById('middleNameOutput').innerText = 'Отчество';
    document.getElementById('professionOutput').innerText = 'Профессия';
};
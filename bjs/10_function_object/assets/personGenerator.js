const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Ирина",
            "id_3": "Валерия",
            "id_4": "Алена",
            "id_5": "Светлана",
            "id_6": "Тамара",
            "id_7": "Авдотья",
            "id_8": "Клавдия",
            "id_9": "Ефросинья",
            "id_10": "Шанталь"
        }
    }`,

    middlenameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Петров",
            "id_2": "Сергеев",
            "id_3": "Олегов",
            "id_4": "Игорев",
            "id_5": "Сериков",
            "id_6": "Абделькадыров",
            "id_7": "Нурланов",
            "id_8": "Васильев",
            "id_9": "Рахметгулиев",
            "id_10": "Степанов"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ассенизатор",
            "id_2": "Мент",
            "id_3": "Собачий психолог",
            "id_4": "Президент Эритреи",
            "id_5": "Министр иностранных дел Чувашии",
            "id_6": "Врач",
            "id_7": "Боцман",
            "id_8": "Водитель-механик",
            "id_9": "Приборист",
            "id_10": "Раб на галерах"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Домохозяйка",
            "id_2": "Фармацевт",
            "id_3": "Мастер ноготочков",
            "id_4": "Бортпроводница",
            "id_5": "Координаторка",
            "id_6": "Инста-модель",
            "id_7": "Закройщица",
            "id_8": "Медсестра",
            "id_9": "Упаковщица",
            "id_10": "Угонщица"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomBirth: function () {
        year = this.randomIntNumber(2002, 1950);
        month = this.randomValue(this.monthJson);
        if (this.month === 'id_4' || 'id_6' || 'id_9' || 'id_11') {
            day = this.randomIntNumber(30, 1);
        } else if (this.month === 'id_2' && year % 4 === 0) {
            day = this.randomIntNumber(29, 1);
        } else if (this.month === 'id_2' && year % 4 !== 0) {
            day = this.randomIntNumber(28, 0);
        } else day = this.randomIntNumber(31, 1);
        date = `${day} ${month} ${year} г.`;
        return date;
    },

    randomGender: () => Math.random() > 0.5 ? personGenerator.GENDER_FEMALE : personGenerator.GENDER_MALE,

    randomValue: function (json) {
        const obj = JSON.parse(json);        
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomFirstName: function () {

        if (this.person.gender === "Мужчина") {

            return this.randomValue(this.firstNameMaleJson);

            } else {

                return this.randomValue(this.firstNameFemaleJson);

            }

    },
     
    randomSurname: function() {

        if (this.person.gender === "Мужчина") {

            return this.randomValue(this.surnameJson);
    
            } else {
    
                return this.randomValue(this.surnameJson) + "а";
    
            }
        
    },

    randomMiddlename: function() {

        if (this.person.gender === "Мужчина") {

            return this.randomValue(this.middlenameJson) + "ич";
    
            } else {
    
                return this.randomValue(this.middlenameJson) + "на";
    
            }       

    },

    randomProfession: function() {

        if (this.person.gender === "Мужчина") {

            return this.randomValue(this.professionMaleJson);
    
            } else {
    
                return this.randomValue(this.professionFemaleJson);
    
            }

        

    },

   


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(); 
        this.person.surName = this.randomSurname();
        this.person.birth = this.randomBirth();
        this.person.middleName = this.randomMiddlename(); 
        this.person.profession = this.randomProfession();
        console.log(this.person);                       
        return this.person;
    }
};



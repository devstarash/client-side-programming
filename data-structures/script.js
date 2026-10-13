function kebabToCamelCase(text) {
  const words = text.split("-");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word.at(0).toUpperCase();
    const restOfWord = word.slice(1);
    result += firstLetter + restOfWord;
  }
  return result;
}

console.log("2.1");
console.log(kebabToCamelCase("background-color"));
console.log(kebabToCamelCase("border-top-left-radius"));

const originalNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const firstCopy = originalNumbers.slice();
firstCopy.reverse();
const secondCopy = originalNumbers.toReversed();

console.log("2.2");
console.log("Исходный массив:", originalNumbers);
console.log("Первая копия:", firstCopy);
console.log("Вторая копия:", secondCopy);

const dictionary = {
  en: {
    "привет": "hello",
    "мир": "world",
    "кот": "cat",
    "дом": "house",
  },
  de: {
    "привет": "hallo",
    "мир": "Welt",
    "кот": "Katze",
    "дом": "Haus",
  },
};

function translateText(text, language) {
  const languageDictionary = dictionary[language];
  if (!languageDictionary) {
    return "Язык не поддерживается";
  }
  const words = text.toLowerCase().split(" ");
  const translatedWords = [];
  for (const word of words) {
    const translatedWord = languageDictionary[word];
    if (translatedWord) {
      translatedWords.push(translatedWord);
    } else {
      translatedWords.push(word);
    }
  }
  return translatedWords.join(" ");
}

console.log("2.3");
console.log(translateText("Привет мир", "en"));
console.log(translateText("кот дом", "de"));
console.log(translateText("привет кот", "fr"));

const weekDays = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",

  showCurrentDay() {
    const today = new Date();
    const sundayIndex = 0;
    const dayIndex = today.getDay();
    let dayNumber = dayIndex;
    if (dayIndex === sundayIndex) {
      dayNumber = 7;
    }
    console.log("Сегодня:", this[dayNumber]);
  },
};

console.log("2.4");
weekDays.showCurrentDay();

function staffToString(staff) {
  let result = "";
  for (const position in staff) {
    result += position + ": " + staff[position] + "\n";
  }
  return result;
}

const staff = {
  director: "Иван Петров",
  manager: "Анна Смирнова",
  accountant: "Ольга Иванова",
};

const staffSecond = {};
for (const position in staff) {
  staffSecond[position] = staff[position];
}
staffSecond.director = "Сергей Кузнецов";
staffSecond.manager = "Мария Попова";
staffSecond.accountant = "Елена Соколова";

console.log("2.5");
console.log("Персонал:\n" + staffToString(staff));
console.log("Персонал 2:\n" + staffToString(staffSecond));

const subjects = {
  list: "Математика, Физика, Информатика",

  addSubject(subject) {
    const subjectList = this.list.split(", ");
    if (!subjectList.includes(subject)) {
      subjectList.push(subject);
    }
    this.list = subjectList.join(", ");
  },

  removeSubject(subject) {
    const subjectList = this.list.split(", ");
    const subjectIndex = subjectList.indexOf(subject);
    if (subjectIndex !== -1) {
      subjectList.splice(subjectIndex, 1);
    }
    this.list = subjectList.join(", ");
  },
};

console.log("2.6");
console.log("Начальный список:", subjects.list);
subjects.addSubject("Химия");
console.log("После добавления Химии:", subjects.list);
subjects.addSubject("Физика");
console.log("Повторное добавление Физики:", subjects.list);
subjects.removeSubject("Математика");
console.log("После удаления Математики:", subjects.list);
subjects.removeSubject("История");
console.log("Удаление отсутствующей Истории:", subjects.list);
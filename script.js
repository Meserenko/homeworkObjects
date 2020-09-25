// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//   Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну.
//
//     let dog = {
//     name: 'Friend',
//     weight: 30,
//     age: 5,
//     speed: 13,
//     }
//   // 1) Інформація про тварину ------------------
//   function info() {
//       console.log(`Name - ${dog.name}\nWeight - ${dog.weight} kg\nAge - ${dog.age} years\nSpeed - ${dog.speed} km/h`)
//     }
//
//   info();
//
//   // 2) За скільки тварина зможе подолати 1000 км ------------------
//   function distance() {
//     const km = 1000, maxInDay = 12;
//     let hours, days;
//     hours = km / dog.speed;
//     days = Math.floor(hours / maxInDay);
//     console.log(`За ${days} днів з копійками подолає 1000 км =)`);
//   }
//   distance();
//
//   // 3) Зміна назви на більш детальну ----------------
//   function changeName(otherName) {
//     console.log(dog.name = otherName);
//   }
//
//   changeName('Other name');
//   console.log(dog);



// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// let area, perimeter
// let figure = {
//   a: 10,
//   b: 15,
//   area: function() {
//     area = this.a * this.b;
//     return area;
//   },
//      perimeter: function() {
//        perimeter = (this.a + this.b) * 2
//        return perimeter;
//      }
//   newSide: function (c) {
//     figure.c = c;
//     return c;
//   },
//   newName: function (name) {
//     figure.name = name;
//     return name;
//   },
//   translate: function () {
//     a = this.a / 100;
//     b = this.b / 100;
//     c = this.c / 100;
//     console.log(`1 сторона - ${a} м , 2 сторона - ${b} м, 3 сторона - ${c} м`)
//   }
// }
// console.log(`${figure.area()} - площа фігури`);
// console.log(`${figure.perimeter()} - периметр фігури`);
// console.log(`${figure.newSide(18)} - нова вісь`);
// console.log(figure.newName('Figure Name'));
// console.log(figure.translate());




// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
//
// {
//
//   tomato: {
//
//       count: 5,
//       price: 50,
//       buy: false,
//       outOfstore: true
//
//   } , ...
//
// }
// Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
//   Виводимо список покупок які ми купили.
//   Додаємо функцію яка дозволить купити продукт.
//   Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
//   Додаємо можливість зменшувати кількість товару(менше 0 бути не може).


// let list = {
//   tomato: {
//
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true
//
//   },
//   potato: {
//     count: 3,
//     price: 30,
//     buy: true,
//     outOfstore: false
//   },
//   bread: {
//     count: 2,
//     price: 10,
//     buy: true,
//     outOfstore: true
//   },
//   salt: {
//     count: 1,
//     price: 15,
//     buy: false,
//     outOfstore: false
//   },
//   apples: {
//     count: 5,
//     price: 5,
//     buy: true,
//     outOfstore: false
//   },
// }


// // 1)Виводимо список покупок - спочатку ті які є в магазині потім яких немає
// let arrIn = [], arrOut = [];
// for(let key in list) {
//   if(list[key].outOfstore === false) {
//     arrIn.push(key)
//   } else {
//     arrOut.push(key);
//   }
// }
// console.log(`${arrIn} - є в магазині\n${arrOut} - немає в магазині`);



// // 2) Виводимо список покупок які ми купили.
//   for(let key in list) {
//     if(list[key].buy === true && list[key].outOfstore === false) {
//       console.log(list[key]);
//     }
//   }



// // 3) Додаємо функцію яка дозволить купити продукт.
// function newBuy() {
//   for (let key in list) {
//     if (list[key].buy === false) {
//       list[key].buy = true;
//     }
//     console.log(list[key])
//   }
// }
// newBuy();




// // 4) Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// function money () {
//   let sum = 0;
//   for(let key in list) {
//     if (list[key].buy === true) {
//       sum += list[key].price * list[key].count;
//     }
//   }
//   console.log(`${sum} - загальна ціна покупок`);
// }
// money(list);


// // 5) Додаємо можливість збільшувати та зменшувати кількість товару.
//
// function changeCount(name, count) {
//   for(key in list) {
//     list[key].name = name;
//   }
//   list[key].count = count;
//   if (count < 0) {
//     alert('Не може кількість бути менша 0, ало')
//   }
// }
// changeCount('tomato', 10)
// console.log(list);

// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

// let arr = [
//   {
//     name: "Yura",
//     age: 55,
//     hobby: ["films", "games", "hiking"],
//     type: "Admin"
//   },
//   {
//     name: "Oleg",
//     age: 19,
//     hobby: ["basketball", "travel", "games"],
//     type: "User"
//   },
//   {
//     name: "Petro",
//     age: 24,
//     hobby: ["voleyball", "films", "soccer"],
//     type: "Admin"
//   },
//   {
//     name: "Vasyl",
//     age: 17,
//     hobby: ["tennis", "gym", "dances"],
//     type: "User"
//   }
// ]
// // 1) Адміни----------
// for(let k = 0; k<arr.length; k++) {
//   if (arr[k].type === 'Admin') {
//     console.log(arr[k]);
//   }
// }



// // 2) Середній вік-------------------
// let midAge, sum = 0;
// for(let i = 0; i<arr.length; i++) {
//   sum+= arr[i].age;
// }
// midAge = Math.floor(sum / arr.length);
// console.log(`${midAge} - середній вік`);



// // 3) Хобі--------------------
// function hobby(arr) {
//   let arrHobby = [], obj;
//   for (let j = 0; j < arr.length; j++) {
//     arrHobby = arrHobby.concat(arr[j].hobby);
//   }
//   obj = new Set(arrHobby);
//   arrHobby = [...obj];
//   return arrHobby;
// }
//
// console.log(hobby(arr));



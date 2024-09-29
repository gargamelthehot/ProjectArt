// let answer = "";
// האזנה לטעינה של העמוד - בכל פעם שהעמוד נטען מחדש תופעל הפונקציה
// check
// document.addEventListener("DOMContentLoaded", function () {
    // check();
// });

// הפונקציה בודקת אם יש משתמש שמור
// local storageב
// אם כן, מסתירה את הכפתור ומציגה אותו
// אם לא, מבקשת מהמשתמש להכניס שם
// אם המשתמש הכניס, שומרת את השם 
// local storageב
// מסתירה את הכפתור ומציגה אותו

// function check() {
//     if (localStorage.getItem("user")) {
//         answer = localStorage.getItem("user");
//         document.getElementById("result").innerText = " " + answer;
//         document.getElementById("button").style.display = "none";
//     }
//     else {
//         answer = prompt("בבקשה הכנס את שמך");
//         if (answer) {
//             alert("ברוך הבא " + answer + " :)");
//             localStorage.setItem("user", answer);
//             document.getElementById("button").style.display = "none";
//             document.getElementById("result").innerText = " " + answer;
//         }
//     }

// } 

/*יצירת מערך גייסונים השומר מידע על כל הפריטים באתר*/
var p1 = {
    "img": {
        "url": "pictureproject/blackwhait/quietnight.jpg"
    },
    "name": "לילה שקט",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "תמונה מעוצבת מודפסת על זכוכית",
    "price": 259.00 ,
    "serial": 1
}

var p2 = {
    "img": {
        "url": "pictureproject/blackwhait/gallhorses.jpg"
    },
    "name": "סוסים בתנועה",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "תמונה מעוצבת סוסים דוהרים בים בליל ירח מלא על",
    "price": 249.00 ,
    "serial": 2
}

var p3 = {
    "img": {
        "url": "pictureproject/blackwhait/darknight.jpg"
    },
    "name": "לילה אפל",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "תמונת נוף  מעוצבת ליילית וחורפית",
    "price": 229.00 ,
    "serial": 3
}

var p4 = {
    "img": {
        "url": "pictureproject/blackwhait/bridge.jpg"
    },
    "name": "גשר ניו יורק",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "תמונת עיר מעוצבת על זכוכית לבית ולמשרד",
    "price": 259.00 ,
    "serial": 4
}

var p5 = {
    "img": {
        "url": "pictureproject/blackwhait/newyork.jpg"
    },
    "name": "ניו יורק",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "תמונת זכוכית של העיר ניו יורק בצבעי מים",
    "price": 269.00 ,
    "serial": 5
}

var p6 = {
    "img": {
        "url": "pictureproject/blackwhait/nesher.jpg"
    },
    "name": "כנפי מלאך",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "תמונה מעוצבת המתארת את הניגוד, אומנות בד",
    "price": 279.00 ,
    "serial": 6
}

var p7 = {
    "img": {
        "url": "pictureproject/blackwhait/horse.jpg"
    },
    "name": "סוס נורדי",
    "categoryname": "תמונה שחור לבן",
    "descrietion": "ציור שמן הדפס בעל חיים, סוס בדהירה קלה",
    "price": 249.00 ,
    "serial": 7
}

var p8 = {
    "img": {
        "url": "pictureproject/part/tsunset.jpg"
    },
    "name": "עץ החיים",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונת נוף שקיעה המתארת את עץ החיים, 5 חלקים",
    "price": 469.00 ,
    "serial": 8
}

var p9 = {
    "img": {
        "url": "pictureproject/part/stormysea.jpg"
    },
    "name": "תחושת המרחק",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונת ים סוער בשקיעה, תמונה 5 חלקים",
    "price": 469.00 ,
    "serial": 9
}

var p10 = {
    "img": {
        "url": "pictureproject/part/sunset.jpg"
    },
    "name": "שקיעה",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונה שקיעה רגועה בעיר עם ציפורים נודדות, תמונת 5 חלקים",
    "price": 469.00 ,
    "serial": 10
}

var p11 = {
    "img": {
        "url": "pictureproject/part/wall.jpg"
    },
    "name": "ירושלים",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונה מעוצבת המייצגת את הכותל באור מתגעגע, תמונת 5 חלקים",
    "price": 469.00 ,
    "serial": 11
}

var p12 = {
    "img": {
        "url": "pictureproject/part/mandb.jpg"
    },
    "name": "ציפורים בין ההרים",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונה בשמן המתארת את שלוות הנדידה בהרים ריקים מאדם, תמונת 3 חלקים",
    "price": 429.00 ,
    "serial": 12
}

var p13 = {
    "img": {
        "url": "pictureproject/part/nightcity.jpg"
    },
    "name": "רעש הלילה",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונת נוף עירוני המציגה את החיים שבלילה, תמונת 5 חלקים ",
    "price": 469.00 ,
    "serial": 13
}

var p14 = {
    "img": {
        "url": "pictureproject/part/seasunrise.jpg"
    },
    "name": "זריחה בים",
    "categoryname": "תמונה חלקים",
    "descrietion": "מונת נוףהמתארת את הזריחה בחוף ים עליז, תמונת 5 חלקים",
    "price": 469.00 ,
    "serial": 14
}

var p15 = {
    "img": {
        "url": "pictureproject/part/tsun.jpg"
    },
    "name": "עץ התקווה",
    "categoryname": "תמונה חלקים",
    "descrietion": "תמונה המתארת צילום עץ מהאדמה שקרני השמש מציצות דרך הענפים, תמונת 5 חלקים",
    "price": 469.00 ,
    "serial": 15
}

var p16 = {
    "img": {
        "url": "pictureproject/set/turquoise.jpg"
    },
    "name": "הביחד והלבד",
    "categoryname": "סט תמונות",
    "descrietion": "סט תמונות מעוצבות לבית בגוון הטורקיז לבן, המתארות ים בשילוב פרחים",
    "price": 479.00 ,
    "serial": 16
}

var p17 = {
    "img": {
        "url": "pictureproject/set/sea.jpg"
    },
    "name": "השקט בלבד",
    "categoryname": "סט תמונות",
    "descrietion": "סט תמונות שליו המציג אישה המטיילת ללא דאגות באזור הים",
    "price": 459.00 ,
    "serial": 17
}

var p18 = {
    "img": {
        "url": "pictureproject/set/woman.jpg"
    },
    "name": "העתיד הקרוב",
    "categoryname": "סט תמונות",
    "descrietion": "סט תמונות בגוון טורקיז שחור המתאר אישה הצופה על העתיד בביטחון",
    "price": 469.00 ,
    "serial": 18
}

var p19 = {
    "img": {
        "url": "pictureproject/set/colorful.jpg"
    },
    "name": "מרחב הצבעים",
    "categoryname": "סט תמונות",
    "descrietion": "סט תמונות צבעוני המתאר את היופי הקיים בשילוב הצבעים",
    "price": 489.00 ,
    "serial": 19
}

var p20 = {
    "img": {
        "url": "pictureproject/set/leaves.jpg"
    },
    "name": "טבע האישה",
    "categoryname": "סט תמונות",
    "descrietion": "סט תמונות בגוון ירוק לבן המתאר את היופי הטיבעי שבאישה וכן מציג את החיות שבה",
    "price": 489.00 ,
    "serial": 20
}

var p21 = {
    "img": {
        "url": "pictureproject/set/pink.jpg"
    },
    "name": "שושנה",
    "categoryname": "סט תמונות",
    "descrietion": "סט תמונות מעוצבות בגוון ורוד עתיק ושמנת המתאר את יופי המחר",
    "price": 469.00 ,
    "serial": 21
}

var p22 = {
    "img": {
        "url": "pictureproject/canvas/awoman.jpg"
    },
    "name": "קסם היופי",
    "categoryname": "תמונת קנבס",
    "descrietion": "תמונת קנבס מעוצבת המציגה אישה אפריקאית ביופי צבעוני ושקט",
    "price": 399.00 ,
    "serial": 22
}

var p23 = {
    "img": {
        "url": "pictureproject/canvas/colort.jpg"
    },
    "name": "פריחת האביב",
    "categoryname": "תמונת קנבס",
    "descrietion": "תמונה מעוצבת המציגה את היופי הצבעוני והחי שבאביב",
    "price": 349.00 ,
    "serial": 23
}

var p24 = {
    "img": {
        "url": "pictureproject/canvas/forest.jpg"
    },
    "name": "יער הסתיו",
    "categoryname": "תמונת קנבס",
    "descrietion": "תמונה מעוצבת של יער חשוב בתקופת הסתיו עם קרני שמש הנותנות אורת תקווה",
    "price": 359.00 ,
    "serial": 24
}

var p25 = {
    "img": {
        "url": "pictureproject/canvas/colorway.jpg"
    },
    "name": "הצבעוניות שבגשם",
    "categoryname": "תמונת קנבס",
    "descrietion": "תמונה המתארת זוג ההולכים בדרך רטובה מגשם הברכה ולאורך הדרך עצים חגיגיים",
    "price": 389.00 ,
    "serial": 25
}

var p26 = {
    "img": {
        "url": "pictureproject/canvas/clouds.jpg"
    },
    "name": "עננים מופשטים",
    "categoryname": "תמונת קנבס",
    "descrietion": "תמונת קנבס בשמן המתארת את העוצמה החבויה בעננים הניראים פשוטים",
    "price": 379.00 ,
    "serial": 26
}

var pictures = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26]

/*עד כאן מילוי כל הנתונים של הפריטים*/


/*פונקציה האחראית לכך שבעמוד פרטי רכישה יוצגו הנתונים על הפריט המבוקש*/

function change(serial) {
    localStorage.setItem("currentPicture", serial);
}
/*מציגה את הפרטי רכישה בעמוד פרטי רכישה וכאן נשתמש בפונקציה change*/ 
function showProductFromLocalStorage() {
    /*שורה זו מידעת אותנו על איזה מוצר אנחנו נמצאים כי שומרת את המספר הסידורי*/
    const serialNumber = localStorage.getItem("currentPicture");
    /*בודק אם המשתמש מכיל ערך*/
    if (serialNumber) {
        /*כאן אנחנו עושים סריקה על המערך pictures ומחפשים מוצר לפי המספר הסידורי ומכניסים אותו לתוך המשתנה product*/ 
        const product = pictures.find(item => item.serial === parseInt(serialNumber));
        /*אם קיים מוצר*/
        if (product) {
            document.getElementById("item-name").innerHTML = pictures[serialNumber - 1].name;
            document.getElementById("image-name").src = pictures[serialNumber - 1].img.url;
            document.getElementById("category-name").innerHTML = pictures[serialNumber - 1].categoryname;
            document.getElementById("description-name").innerHTML = pictures[serialNumber - 1].descrietion;
            document.getElementById("item-price").innerHTML = pictures[serialNumber - 1].price;
            document.getElementById("serial-number").innerHTML = pictures[serialNumber - 1].serial;
        } else {
            console.log("מוצר עם המספר הסידורי שנמצא ב־localStorage לא נמצא במערך.");
        }
    } else {
        console.log("לא נמצא מספר סידורי ב־localStorage.");
    }
}

//פונקציה האחראית על כפתור כמות בעמוד פרטי רכישה שלא יוכלו להציג מספר גדול מ5 או קטן מ1
function validateQuantity(input) {
    if (input.value < input.min) input.value = input.min;
    if (input.value > input.max) input.value = input.max;
}
/*פונקציה האחראית על הוספת המוצרים לסל קניות בלחיצה על הכפתור הוספה לסל*/
function addToCart() {
    //שולף את הכמות מהכמות שהכנסנו בפרטי רכישה
    const amount = document.getElementById("quantity").value;
    // 1. שליפת המערך מה־localStorage
    //יצרנו מערך שהוא יוצג בסל קניות. אם המערך לא קיים אז ניצור מערך ריק
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const serialNumber = parseInt(localStorage.getItem("currentPicture"), 10);
    // 2. בדיקה אם המוצר כבר קיים בסל
    const existingProductIndex = cart.findIndex(item => parseInt(item.serial, 10) === serialNumber);

    // 3. עדכון או הוספה של המוצר בסל
    if (existingProductIndex !== -1) {
        // מצאנו מוצר בסל עם אותו serial, עדכון הכמות של המוצר
        const old_quantity = parseInt(cart[existingProductIndex].quantity, 10);
        cart[existingProductIndex].quantity = old_quantity;
        cart[existingProductIndex].quantity += parseInt(amount, 10);
    } else {
        // אם המוצר אינו קיים בסל - הוספתו לסל
        const productToAdd = pictures[serialNumber - 1];
        cart.push({ ...productToAdd, quantity: amount });
    }

    // 4. עדכון ה־localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("פריט זה נוסף לסל בהצלחה :)");
}
/*מציגה את המערך קניות לסל קניות*/ 
function displayItems() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    displayTitle();

    //שולף את הסל קניות
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //אם מכיל
    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            let itemDiv = document.createElement("div");

            // לעיצוב class הוספת
            itemDiv.className = "item";

            // Container for buttons
            let buttonsContainer = document.createElement("div");
            buttonsContainer.className = " item-buttons column buttons";


            let deleteButton = document.createElement("button");
            //כאן יצרנו אפונקציה שקוראת למחיקת מוצר
            deleteButton.onclick = createDeleteFunction(i);

            let deleteIcon = document.createElement("i");
            deleteIcon.className = "fa fa-trash-o";
            deleteIcon.setAttribute("aria-hidden", "true");

            deleteButton.appendChild(deleteIcon);
            buttonsContainer.appendChild(deleteButton);

            // Append buttons container to itemDiv
            itemDiv.appendChild(buttonsContainer);

           

            let quantityInput = document.createElement("input");
            quantityInput.className = "column";
            quantityInput.type = "number";
            quantityInput.value = cart[i].quantity; // הגדרת ערך ה-input לפי הכמות הקיימת במערך

            quantityInput.min = 1; // הגבלת הערך המינימלי שניתן להזין
            quantityInput.max = 5; // הגבלת הערך המקסימלי שניתן להזין

            quantityInput.addEventListener("input", function (event) {
                this.value = Math.min(Math.max(parseInt(this.value) || 1, 1), 5);
            });

            quantityInput.addEventListener("change", function () {
                let newValue = parseInt(this.value);
                // בדיקה אם הערך שהוזן מתאים לגבולות
                if (newValue < 1) {
                    newValue = 1;
                } else if (newValue > 5) {
                    newValue = 5;
                }
                this.value = newValue; // עדכון הערך ב-input
                cart[i].quantity = newValue;
                localStorage.setItem("cart", JSON.stringify(cart)); // שמירת העדכון ב-localStorage
                updatePrice(); // קריאה לפונקציה updatePrice כדי לעדכן את המחיר הכולל
            });
            //הגדרת העיצוב
            quantityInput.style.width = "50px";
            quantityInput.style.flex = "none";
            itemDiv.appendChild(quantityInput);

            let categoryElement = document.createElement("p");
            categoryElement.className = "column";
            categoryElement.textContent = cart[i].categoryname;
            itemDiv.appendChild(categoryElement);

            let priceElement = document.createElement("p");
            priceElement.className = "column";
            priceElement.textContent = cart[i].price;
            itemDiv.appendChild(priceElement);

            let nameElement = document.createElement("p");
            nameElement.className = "column";
            nameElement.textContent = cart[i].name;
            itemDiv.appendChild(nameElement);

            
            let paragraphElement = document.createElement("p");
            paragraphElement.className = "column";

            let imgElement = document.createElement("img");
            imgElement.src = cart[i].img.url;
            imgElement.alt = cart[i].name;
            imgElement.width = 50;

            paragraphElement.appendChild(imgElement);
            itemDiv.appendChild(paragraphElement);

            outputDiv.appendChild(itemDiv);

        }
    }
}

// פונקציה ליצירת פונקציה מחיקה ייחודית לכל כפתור
function createDeleteFunction(index) {
    return function () {
        deleteItem(index);
    };
}

// פונקציה למחיקת איבר מהמערך
function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart)); // שמירה ב-local storage

    displayItems(); // רענון התצוגה
    updatePrice();
}
//הגדרת הכותרת של הסל קניות
function displayTitle() {
    let outputTitle = document.getElementById("output");

    let titleDive = document.createElement("div");

    titleDive.className = "item";

    let buttonsElement = document.createElement("p");
    buttonsElement.className = "item-buttons column buttons";
    buttonsElement.textContent = "הסרה מהסל";
    titleDive.appendChild(buttonsElement);

    let quantityElement = document.createElement("p");
    quantityElement.className = "column";
    quantityElement.textContent = "כמות";
    quantityElement.style.width = "50px";
    quantityElement.style.flex = "none";
    titleDive.appendChild(quantityElement);

    let categoryElement = document.createElement("p");
    categoryElement.className = "column";
    categoryElement.textContent = "קטגוריה";
    titleDive.appendChild(categoryElement);

    let priceElement = document.createElement("p");
    priceElement.className = "column";
    priceElement.textContent = "מחיר";
    titleDive.appendChild(priceElement);

    let nameElement = document.createElement("p");
    nameElement.className = "column";
    nameElement.textContent = "שם";
    titleDive.appendChild(nameElement);

    let imgElement = document.createElement("p");
    imgElement.className = "column";
    imgElement.textContent = "תמונה";
    titleDive.appendChild(imgElement);


    outputTitle.appendChild(titleDive);

}
//מעדכנת את המחיר לתשלום
function updatePrice() {
    let totalPrice = 0;
    console.log(totalPrice);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            totalPrice += parseInt(cart[i].price, 10) * parseInt(cart[i].quantity, 10);
        }
    }
    console.log(totalPrice);
    document.getElementById("total-price").innerHTML = totalPrice;
}

function pay() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
        let message = "הזמנתך בוצעה בהצלחה!\n\nפרטי ההזמנה:\n";
        cart.forEach(item => {
            //פירוט הסל קניות
            message += `${item.name} - ${item.quantity} * ${item.price} ₪\n`;
        });
        //מציג את ההודעת קניה
        alert(message);
        //מעדכן את המערך בלוקל להיות ריק ומרוקנים את הסל קניות
        localStorage.removeItem("cart");
        //עוברים לעמוד הבית
        window.location.href = "mainp.html"; // מעבר לעמוד home.html
    }
    else
        //אם לחצנו על תשלום והסל ריק תוצג הודעה מתאימה   
        alert("הסל ריק");

}


let array = ["Gilos", "Banan", "Qulupnay", "Nok"];

alert("Arrayni uzunligi: " + array.length);

let tewiriw = confirm("Boshidan Elementni o'chiramizmi?????");

if (tewiriw) {
    console.log(array);
    
    let Ochrish = array.shift(); 
    console.log(array);
    
    alert(`O'chirdik: ${Ochrish}`);
} else {
    console.log(array);
    console.log("O'chirilmadi");
    
    alert("O'chirilmadi.");
}

let oxiridan = confirm("Oxiridan Elementni o'chiramizmi?????");

if (oxiridan) {
    console.log(array);
    
    let oxridanDelete = array.pop(); 
    console.log(array);
    
    alert(`O'chirdik: ${oxridanDelete}`);
} else {
    console.log(array);
    console.log("O'chirilmadi");
    
    alert("O'chirilmadi.");
}

let qoshamiz = confirm("Oxiridan Elementni qo'shamizmi?????");

if (qoshamiz) {
    let brat = prompt("Oxiridan Qo'shmoqchi bo'gan narsezni kiriting:");
    if (brat == "" || brat == null) {
        alert("Siz hech narsa kiritmadingiz!");
    } else {
        array.push(brat);
        console.log(array);
    }
    
} else {
    console.log(array);
    console.log("Oxiridan Qo'shilmadi");
    
    alert("Oxiridan Qo'shilmadi");
}


let qoshamizzz = confirm("Boshidan Elementni qo'shamizmi?????");

if (qoshamizzz) {
    let brat2 = prompt("Boshidan Qo'shmoqchi bo'gan narsezni kiriting:");
    if (brat2 == "" || brat2 == null) {
        alert("Siz hech narsa kiritmadingiz!");
    } else {
        array.unshift(brat2);
        console.log(array);
    }
    
} else {
    console.log(array);
    console.log("Boshidan Qo'shilmadi");
    
    alert("Boshidan Qo'shilmadi");
}
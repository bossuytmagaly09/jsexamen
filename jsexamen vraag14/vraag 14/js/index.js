function kwadraat(getal){
    let number=prompt("Geef een getal in:");
    for (let i=1;i<=getal;i++){
        kwadraat(i*i);
        console.log(i);
    }
}





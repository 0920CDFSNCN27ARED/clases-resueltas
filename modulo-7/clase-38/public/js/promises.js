const url =
    "https://api.giphy.com/v1/gifs/random?api_key=CNiRVOVw47tBdejvxdL625WLIT49xAL6&tag=&rating=g";

const formData = new FormData()
formData.append("name",document.getElementById("nameInput").value);

function promesasSinAsync(){
    return new Promise((resolve,reject)=>{
        console.log("Se ejecuta la promesa")
        fetch(url).then((response)=>{
            return response.json()
        }).then((json)=>{
            resolve(json)
        })
    })
}

async function promesasConAsync(){
    console.log("Se ejecuta la promesa");
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

async function main(){
    const data = await promesasConAsync();
    console.log(data);
}
main();




// console.log("Hola desde el principio de promesasSinAsync");
    // fetch(url).then(()=>{
    //     console.log("Hola desde el THEN")
    // })
    // console.log("Hola desde el final de promesasSinAsync");
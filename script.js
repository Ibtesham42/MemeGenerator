
function fetchApi(){
    fetch("https://meme-api.com/gimme")
.then( (data) =>{

    if(!data.ok) throw new Error("No Error");

    
    return data.json();
}).then( (data) => {
    const imgElement = document.getElementById("meme");
    imgElement.setAttribute("src", data.url);
}).catch((error) =>{
    fetchApi()
});
}
fetchApi()






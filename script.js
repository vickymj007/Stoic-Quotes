
const apiUrl = "https://api.themotivate365.com/stoic-quote"
const main = document.querySelector(".main")
const refreshBtn = document.querySelector(".btn")
const loader = document.querySelector(".loader")

//Function to Fetch Data
async function fetchData (url){
    try{
        const data = await fetch(url)
        const response = await data.json()
        createContainer(response)
        if(data.status ===200){
            loader.style.visibility =  "hidden"
        }
    } catch(error){
        console.log(error.message);
    }
}

fetchData(apiUrl)



//Function to Create and Append the Quote inside Main 
function createContainer(response){
    const container = document.createElement("div")
    container.className ="container"

    const authorName = document.createElement("h4")
    authorName.className = "author"
    authorName.innerText = `-${response.author}`

    const quote = document.createElement("h1")
    quote.className = "quote"
    quote.innerHTML = `<q>${response.quote}</q>`

    container.append(quote, authorName)
    main.append(container)
}

//Function to Refresh Page on Click
refreshBtn.addEventListener("click", ()=>{
    location.reload()
})




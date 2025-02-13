// Functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}
//const
const KM_PRICE = 0.21
// DOM elms
const GeneraTicketElm = document.querySelector("form")
const ticketElm = document.querySelector(".ticket-container")
const fullNameFieldElm = document.getElementById("name-field")
const kmFieldElm = document.getElementById("km-field")
const ageFieldElm = document.getElementById("age-field")
const submitBtnELm  = document.getElementById("submit-btn")
const resetBtnElm = document.getElementById("reset-btn")
const fullNameElm = document.getElementById("full-name")
const bigliettoAgeElm = document.getElementById("biglietto-age")
const carrozzaElm = document.getElementById("Carrozza")
const codiceCpElm = document.getElementById("codice-cp")
const ticketPrizeElm = document.getElementById("ticket-prize")

//events
GeneraTicketElm.addEventListener("submit", function(e) {
e.preventDefault()

const km = Number(kmFieldElm.value)
const age = ageFieldElm.value
let ticketPrize = km * KM_PRICE
bigliettoAgeElm.innerHTML = "Tariffa standard"

if (age === "minorenne") {
    ticketPrize *= 0.8
    bigliettoAgeElm.innerHTML = "Tariffa Young"
} else if(age === "over65"){
    ticketPrize *= 0.6
    bigliettoAgeElm.innerHTML = "Tariffa Senior"
}

ticketPrize = Number(ticketPrize.toFixed(2))
// PRINT
fullNameElm.innerHTML = fullNameFieldElm.value
codiceCpElm.innerHTML = getRndInteger(9000, 9999)
carrozzaElm.innerHTML = getRndInteger(1 , 10)
ticketPrizeElm.innerHTML = "€" + ticketPrize



ticketElm.classList.remove("hidden")


})

resetBtnElm.addEventListener("click" , function(){
    ticketElm.classList.add("hidden")
})



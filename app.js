const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "88:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "12:11",
        destination: "UZB",
        flight: "CL 320",
        gate: "C 01",
        remarks: "CANCELED"
    },
    {
        time: "11:11",
        destination: "USA",
        flight: "OX 203",
        gate: "B 01",
        remarks: "DELAYED"
    }
]

const destination = ["OMAN", "UZB", "USA"]
const remarks = ["ON TIME", "CANCELED", "DELAYED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")
        for (const filghtDetail in flight) {
            const tableCall = document.createElement("td")
            const word = Array.from(flight[filghtDetail])
            // tableCall.innerText = flight[filghtDetail]
            // tableRow.appendChild(tableCall)

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCall.append(letterElement)

                },100 * index)

                
            }
            tableRow.append(tableCall)
        }
        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPORSTUWXYZ"
    return alphabet.charAt(Math.floor(Math.random()* alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random()* newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random()* numbers.length))
}


function generateTime() {
    let displayHour = hour

    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" * hour
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}


function shuffleUp(){
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destination[Math.floor(Math.random() * destination.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })

    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 2000)

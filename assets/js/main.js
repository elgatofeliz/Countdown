let input = document.querySelector("#minutes")
let output = document.querySelector("#time")
let ispaused = false

let startMinCountdown = () => {
    let inputToSeconds = input.value * 60
    let myfunctionStart = () => {
        if (ispaused == false) {
            if (inputToSeconds > 0) {
                inputToSeconds -= 1
                let seconds = Math.floor(inputToSeconds % 60)
                let minutes = Math.floor((inputToSeconds / 60) % 60)
                output.innerHTML = `${minutes}:${seconds}`
            } else {
                clearInterval(c)
                output.innerHTML = `00:00`
            }
        } else if (ispaused == true) {
            console.log("pause")
        }
    }
    let c = setInterval(myfunctionStart, 1000)

    document.querySelector("#pause").addEventListener("click", () => {
        if (ispaused == false) {
            ispaused = true
        } else if (ispaused = true) {
            ispaused = false
        }
    })

    document.querySelector("#restart").addEventListener("click", () => {
        inputToSeconds = input.value * 60
        clearInterval(c)
        let c = setInterval(myfunctionStart, 1000)
    })
}
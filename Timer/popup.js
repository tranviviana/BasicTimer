const timeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const timerElement = document.getElementById("timer")


function updateTimeElements() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0
    timerElement.textContent = `The time is at: ${time} seconds`
  })
  const currentTime = new Date().toLocaleTimeString()
  timeElement.textContent = `The time is: ${currentTime}`
}
updateTimeElements()
setInterval(updateTimeElements, 1000)

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???"
  nameElement.textContent = `Your name is: ${name}`
})

const startButt = document.getElementById("start")
const stopButt = document.getElementById("stop")
const resetButt = document.getElementById("reset")

startButt.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  })
})
stopButt.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  })
})
resetButt.addEventListener("click", () => {
  chrome.storage.local.set({
    timer:0,
    isRunning: false
  })
})
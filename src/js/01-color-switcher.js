const refs = {
    body: document.querySelector("body"),
    startButton: document.querySelector("button[data-start]"),
    stopButton: document.querySelector("button[data-stop]"),
}

let timerId = null;
refs.stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startButton.addEventListener('click', event => {
    event.target.disabled = true;
    refs.stopButton.disabled = false;

    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
})

refs.stopButton.addEventListener('click', event => {
    event.target.disabled = true;
    refs.startButton.disabled = false;

    clearInterval(timerId);
})

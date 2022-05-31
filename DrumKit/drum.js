// 1 - data

// drum list

const listItems = document.getElementsByTagName("li");

// list of audio files

const sounds = [
    `sounds/hihat.wav`,
    `sounds/snare.wav`,
    `sounds/openhat.wav`,
    `sounds/clap.wav`,
    `sounds/tom.wav`,
    `sounds/tom.wav`,
    `sounds/kick.wav`,
    `sounds/boom.wav`,
    `sounds/ride.wav`
]

// keyboard options in order of sounds

const keyOptions = ["c", "d", "s", "r", "y", "u", "b", "h", "k"];

// 2 - functionality

// click event
for (let listItem of listItems) {
    listItem.addEventListener("click", () => {
        let soundFile = `sounds/${listItem.id}.wav`;
        let drumBeat = new Audio(soundFile);
        drumBeat.play();
    });
}

// keypress event
document.addEventListener("keypress", (e) => {
    for (let i = 0; i < keyOptions.length; i++) {
        if (e.key == keyOptions[i]) {
            let playBeat = new Audio(sounds[i]);
            playBeat.play();
        }
    }
});

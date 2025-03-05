const moodButtons = document.querySelectorAll(".mood-button");
const soundToggles = document.querySelectorAll(".sound-toggle");
const volumeControls = document.querySelectorAll(".volume-control");

const moodBackgrounds = {
    sunny: "https://i.pinimg.com/originals/95/58/15/955815ec7c5ba30a562b61ce73f0b8ef.gif",
    rainy: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJpYTZyYzgwdG91ZzkzYXJ5aGlzdjB2MHd2bzJzZXA4bWJ4OWJkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTcnT45z6H5gxFYZZS/giphy.gif",
    winter: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzBvZzdleXJ4bnRjNXpvdW16ajA0c2U5bzhsc3QzMHE3NjhuMTIzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2UndXEgN5iBwc/giphy.gif",
    chill: "https://media.giphy.com/media/pVGsAWjzvXcZW4ZBTE/giphy.gif?cid=ecf05e47sw8qoebue44lalzdna9dh2nf8d5w4mpa2t60y9eb&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    bonfire: "https://i.pinimg.com/originals/7a/c7/1e/7ac71e72373b0fb270b3a6d72e44eea3.gif",
    citylife: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXk0djBscXl6cDJtdmg1aGtnbjA4bzJqOHR4bjd6Yzc1cXhxcHNoeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bDS3ycLNK08UhgAiI3/giphy.gif",
    night: "https://media.giphy.com/media/Basrh159dGwKY/giphy.gif?cid=ecf05e47bxunghda9pa1blmruk90n8ho9s94fwxoxba0n7yl&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    extra1: "https://i.pinimg.com/originals/92/97/74/929774b033a66c070f5da21ef21c0090.gif",
    extra2: "https://i.pinimg.com/originals/39/d2/45/39d245b800aba34d4200443546f47c92.gif",
    extra3: "https://i.pinimg.com/originals/28/e6/e1/28e6e16b4eee580edadfc42452bc9d74.gif"
};

document.body.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHBhZHZvNzJ3MDVqNjh2MHU2c3U1cG15MzVzY203YmFtMDdjdGhueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TX04lUDSfC1nnhp31L/giphy.gif')";
document.body.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExemhpOGc1cWN5YWFuNWRlaWMyMnBiNHd4N3F6ajB3cG43Yjdlc3EyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KxbHmvL3MGcctzlfdX/giphy.gif')";

moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.getAttribute("data-mood");
        const bgUrl = moodBackgrounds[mood];
        if (bgUrl) {
            
            document.body.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHBhZHZvNzJ3MDVqNjh2MHU2c3U1cG15MzVzY203YmFtMDdjdGhueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TX04lUDSfC1nnhp31L/giphy.gif')";
            
            
            setTimeout(() => {
                document.body.style.backgroundImage = `url(${bgUrl})`;
                localStorage.setItem("selectedMood", mood);
            }, 500);
        } else {
            console.error("Invalid mood selected:", mood);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sounds = {
        "road-noise": new Audio("sounds/car.wav"),
        "birdsong": new Audio("sounds/chirping-of-birds.wav"),
        "rainfall": new Audio("sounds/rainfall.wav"),
        "thunderstorm": new Audio("sounds/thunderstorm.wav"),
        "wind-gusts": new Audio("sounds/wind.wav"),
        "tape-whir": new Audio("sounds/tape.wav"),
        "white-noise": new Audio("sounds/whitenoise.wav"),
        "pencil-scribbling": new Audio("sounds/pencilscribble.wav"),
        "clock-ticking": new Audio("sounds/tickingclock.wav"),
        "chatter": new Audio("sounds/chatter.wav"),
        "footsteps": new Audio("sounds/walking.wav"),
        "ocean-waves": new Audio("sounds/oceanwaves.wav"),
        "seagulls": new Audio("sounds/seagulls.wav"),
        "fireplace": new Audio("sounds/fireplace.wav"),
        "cricket-chirping": new Audio("sounds/cricket-chirping.wav"),
        "engine-hum": new Audio("sounds/car_engine.wav"),
        "keyboard-typing": new Audio("sounds/keyboard.wav"),
        "music": new Audio("sounds/music.wav")
    };

    
    Object.values(sounds).forEach(sound => {
        sound.loop = true;
    });

    const moodSounds = {
        sunny: [
            { sound: "birdsong", volume: 0.2 },
            { sound: "wind-gusts", volume: 0.7 },
            { sound: "road-noise", volume: 0.9 },
            { sound: "engine-hum", volume: 0.9 }
        ],
        rainy: [
            { sound: "rainfall", volume: 0.4 },
            { sound: "thunderstorm", volume: 0.5 },
            { sound: "wind-gusts", volume: 0.8 }
        ],
        winter: [
            { sound: "tape-whir", volume: 0.3 },
            { sound: "music", volume: 0.4 }
        ],
        chill: [
            { sound: "chatter", volume: 0.3 },
            { sound: "seagulls", volume: 0.1 }
        ],
        bonfire: [
            { sound: "fireplace", volume: 0.5 },
            { sound: "rainfall", volume: 0.3 },
            { sound: "pencil-scribbling", volume: 0.3 }
        ],
        citylife: [
            { sound: "chatter", volume: 0.2 },
            { sound: "footsteps", volume: 0.3 },
            { sound: "wind-gusts", volume: 0.6 }
        ],
        night: [
            { sound: "seagulls", volume: 0.3 },
            { sound: "wind-gusts", volume: 0.3 },
            { sound: "ocean-waves", volume: 0.6 }
        ],
        extra1: [
            { sound: "clock-ticking", volume: 0.1 },
            { sound: "fireplace", volume: 0.7 },
            { sound: "cricket-chirping", volume: 0.2 }
        ],
        extra2: [
            { sound: "music", volume: 0.3 },
            { sound: "birdsong", volume: 0.3 },
            { sound: "road-noise", volume: 0.4 }
        ],
        extra3: [
            { sound: "keyboard-typing", volume: 0.4 },
            { sound: "chatter", volume: 0.1 }
        ]
    };

    function playMoodSounds(mood) {
        const soundsToPlay = moodSounds[mood];
        if (soundsToPlay) {
            soundsToPlay.forEach(({ sound, volume }) => {
                const audio = sounds[sound];
                const soundControl = document.querySelector(`.sound-control[data-sound="${sound}"]`);
                const volumeControl = soundControl.querySelector(".volume-control");

                if (audio) {
                    audio.volume = volume;
                    audio.loop = true;
                    audio.play().catch(error => console.error(`Error playing sound: ${error}`));
                    volumeControl.style.display = "block";
                }
            });
        }
    }

    let activeMood = null;

    function stopAllSounds() {
        Object.values(sounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });

        document.querySelectorAll(".volume-control").forEach(volumeControl => {
            volumeControl.style.display = "none";
        });
    }

    document.querySelectorAll(".mood-button").forEach(button => {
        button.addEventListener("click", () => {
            const mood = button.getAttribute("data-mood");
            if (activeMood === mood) {
                stopAllSounds();
                activeMood = null;
            } else {
                stopAllSounds();
                playMoodSounds(mood);
                activeMood = mood;
            }
        });
    });

    document.querySelectorAll(".sound-button").forEach((button) => {
        button.addEventListener("click", function () {
            const soundControl = this.closest(".sound-control");
            const soundName = soundControl.dataset.sound;
            const sound = sounds[soundName];
            const volumeControl = soundControl.querySelector(".volume-control");

            if (sound) {
                if (sound.paused) {
                    sound.loop = true;
                    sound.play().catch(error => console.error(`Error playing sound: ${error}`));
                    volumeControl.style.display = "block";
                } else {
                    sound.pause();
                    sound.currentTime = 0;
                    volumeControl.style.display = "none";
                }
            } else {
                console.error(`Sound not found: ${soundName}`);
            }
        });
    });

    document.querySelectorAll(".volume-control").forEach((slider) => {
        slider.addEventListener("input", function () {
            const sound = sounds[this.closest(".sound-control").dataset.sound];
            if (sound) {
                sound.volume = this.value;
            } else {
                console.error(`Sound not found: ${this.closest(".sound-control").dataset.sound}`);
            }
        });
    });
});

const hourglass = document.getElementById("hourglass");
const timerDisplay = document.getElementById("timer-display");
const pomodoroTimer = document.getElementById("pomodoro-timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const restartBtn = document.getElementById("restart-btn");
const alarmSound = document.getElementById("alarm-sound");

let timer;
let timeLeft = 25 * 60;
let breakTimeLeft = 5 * 60;
let isRunning = false;
let onBreak = false;

hourglass.addEventListener("mousedown", () => {
    pomodoroTimer.style.display = pomodoroTimer.style.display === "none" ? "block" : "none";
});

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                playAlarm();
                if (!onBreak) {
                    startBreak();
                } else {
                    alert("Break time over! Time to get back to work.");
                    resetTimer();
                }
            }
        }, 1000);
    }
}

function playAlarm() {
    alarmSound.loop = true;
    alarmSound.play();
    setTimeout(() => {
        alarmSound.loop = false;
        alarmSound.pause();
        alarmSound.currentTime = 0;
    }, 30000);
}

function startBreak() {
    onBreak = true;
    timeLeft = breakTimeLeft;
    updateDisplay();
    startTimer();
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    onBreak = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

stopBtn.addEventListener("click", resetTimer);

restartBtn.addEventListener("click", resetTimer);

updateDisplay();

const fullscreenBtn = document.getElementById("fullscreen-btn");

fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
    }
});

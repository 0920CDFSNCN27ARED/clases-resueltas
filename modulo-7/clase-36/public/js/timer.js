window.addEventListener("load", () => {
    const startBtn = document.getElementById("start-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const resetBtn = document.getElementById("reset-btn");

    const timerText = document.getElementById("timer");
    let currentStart = null;
    let intervalHandle = null;
    let pausedMoment = null;

    startBtn.addEventListener("click", (event) => {
        if (currentStart == null) {
            currentStart = Date.now();
        }

        if (pausedMoment) {
            const timeElapsed = Date.now() - pausedMoment;
            currentStart += timeElapsed;
            pausedMoment = null;
        }

        if (intervalHandle == null) {
            startTimerInterval();
        }
    });

    pauseBtn.addEventListener("click", (event) => {
        clearInterval(intervalHandle);
        intervalHandle = null;
        pausedMoment = Date.now();
    });

    resetBtn.addEventListener("click", (event) => {
        if (currentStart != null) {
            currentStart = Date.now();
        }
    });

    function startTimerInterval() {
        intervalHandle = setInterval(() => {
            updateTimerText();
        }, 0);
    }

    function getCurrentSeconds() {
        return (Date.now() - currentStart) / 1000;
    }

    function formatSeconds(fullSeconds) {
        const minutes = Math.floor(fullSeconds / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (fullSeconds - minutes * 60).toFixed(2);
        return `${minutes}:${seconds}`;
    }

    function updateTimerText() {
        timerText.innerHTML = formatSeconds(getCurrentSeconds());
    }
});

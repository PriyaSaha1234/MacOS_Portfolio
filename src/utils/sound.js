const clickSound = new Audio("/sounds/click.mp3");
clickSound.volume = 0.8;
clickSound.preload = "auto";

export const playClickSound = () => {
    clickSound.pause();
    clickSound.currentTime = 0;

    clickSound.play().catch(() => {});
};
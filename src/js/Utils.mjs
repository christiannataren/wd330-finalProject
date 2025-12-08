export function getLocation() {
    return window.location.pathname;
}

export function getRandomNumber(limit) {
    ///return a random number between 0 and the given limit
    return Math.round(Math.random() * limit);
}
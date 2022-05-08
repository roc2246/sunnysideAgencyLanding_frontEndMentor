const images = document.querySelectorAll("img");

if(screen.width <= 390){
Object.keys(images).forEach((image) => {
    let url = images[image].src;
    const match = /desktop/.test(url)
    if (match ===true) {
        const mobileURL = url.replace(/desktop/, "mobile")
        images[image].src = mobileURL
    }
})
}
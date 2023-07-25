
setInterval(()=>{
    x = Math.floor(Math.random() * 255)
    y = Math.floor(Math.random() * 255)
    z = Math.floor(Math.random() * 255)
    document.body.style.background = `rgb(${x}, ${y}, ${z})`     

    let watch = new Date();
    let watchild = document.querySelector('.watchStyle')
    watchild.innerHTML = `${watch.getHours()}:${watch.getMinutes()}:${watch.getSeconds()}`

}, 1000)


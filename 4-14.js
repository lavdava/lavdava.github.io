triangle = document.getElementsByClassName("triangle1")[0]
triangle2 = document.getElementsByClassName("triangle2")[0]
triangle.classList.add('move')
triangle2.classList.add('move')
pause = document.getElementById("btn2")
document.getElementById('btn').addEventListener('click', (e) => {
    // document.getElementsByClassName("square")[0].classList.toggle('move')
    triangle.style.animationPlayState = "running"
    triangle2.style.animationPlayState = "running"
})

pause.addEventListener('click', (e) => {
    // document.getElementsByClassName("square")[0].classList.toggle('move')
    triangle.style.animationPlayState = "paused"
    triangle2.style.animationPlayState = "paused"
})
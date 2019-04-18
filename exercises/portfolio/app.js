
handleClick = (e, url) => {
    e.preventDefault();
    window.open(url);
}

const git = document.getElementById("git")
const linkedIn = document.getElementById("linkedIn")
const insta = document.getElementById("insta")

git.addEventListener("click", e => {
    handleClick(e, "https://github.com/ginachong")
})

linkedIn.addEventListener("click", e => {
    handleClick(e, "https://www.linkedin.com/in/ginacgross/")
})

insta.addEventListener("click", e => {
    handleClick(e, "https://www.instagram.com/gina.chong/")
})

arrowClick = (e) => {
    e.preventDefault()
    window.scroll(0, 1000)
}

// const arrow = document.getElementById("arrow")

// arrow.addEventListener("click", e => {
//     arrowClick(e)
// })

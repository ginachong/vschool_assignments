
clickProject = (e, url) => {
    e.preventDefault();
    window.open(url);
}

const project1img = document.getElementById("project1img")
const project2img = document.getElementById("project2img")
const project3img = document.getElementById("project3img")
const project4img = document.getElementById("project4img")

project1img.addEventListener("click", e => {
    clickProject(e, "http://selfish-butter.surge.sh/")
})

project2img.addEventListener("click", e => {
    clickProject(e, "http://sore-pear.surge.sh/")
})

project3img.addEventListener("click", e => {
    clickProject(e, "https://github.com/ginachong/vschool_assignments/tree/master/exercises/rpg")
})

// project4img.addEventListener("click", e => {
//     clickProject(e, "http://selfish-butter.surge.sh/")
// })

const git = document.getElementById("git")

git.addEventListener("mouseover", () => {
    git.src = "media/pinkgiticon.png"
})

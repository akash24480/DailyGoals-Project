const container = document.querySelector(".container")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
const form = document.querySelector("form")

const task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
console.log(task)
showAllTask();



function showAllTask(){
    task.forEach((value,index)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "task")

        const innerDiv = document.createElement("div")
        div.append(innerDiv);

        const p = document.createElement("p")
        p.innerText = value.title;
        innerDiv.append(p)

        const span = document.createElement("span")
        span.innerText = value.description;
        innerDiv.append(span)

        const btn = document.createElement("button")
        btn.setAttribute("class","deleteBtn")
        btn.innerText = "-"
        div.append(btn);

        container.append(div)

        btn.addEventListener("click", ()=>{
            removeTask()
            task.splice(index,1);
            localStorage.setItem("task", JSON.stringify(task))
            showAllTask()
        })


    })
}

function removeTask(){
    task.forEach((value)=>{
        const div = document.querySelector(".task")
        div.remove()
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    removeTask()
    task.push({
        title : title.value,
        description : description.value
    })
    localStorage.setItem("task", JSON.stringify(task))
    console.log(task)
    showAllTask()
})

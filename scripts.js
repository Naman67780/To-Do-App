// TO-DO-App
let addBox=document.getElementById("tasks")
let addButton=document.getElementById("addButton")
let searchBox=document.getElementById("search")
let searchButton=document.getElementById("searchButton")
let taskContainer=document.getElementById("taskContainer")
let completedTask=document.getElementById("completed")
let notCompletedTasks=document.getElementById("notcompleted")

//Lists and Variables
let tasks=[]
let complet=0
let notComplete=0
let newdiv

//Functions
function addText(){
    let task=addBox.value
    tasks.push(task)
    console.log(task)

}
function addTaskToList(){
    let task=addBox.value
    tasks.push(task)
}

function addTasks(){
    let task=addBox.value
    //creating elements
    newdiv=document.createElement("div")
    let para=document.createElement("p")
    let completeBtn=document.createElement("button")
    let tickImg=document.createElement("img")
    let notCompleteBtn=document.createElement("button")
    let crossImg=document.createElement("img")
    //Inner Html
    para.innerHTML=`${task}`
    tickImg.src="https://cdn-icons-png.flaticon.com/128/7103/7103702.png"
    crossImg.src="https://cdn-icons-png.flaticon.com/128/83/83972.png"
    //Adding elements
    completeBtn.appendChild(tickImg)
    notCompleteBtn.appendChild(crossImg)
    newdiv.appendChild(para)
    newdiv.appendChild(completeBtn)
    newdiv.appendChild(notCompleteBtn)
    //Styles
    tickImg.style.height="10px"
    tickImg.style.width="10px"
    crossImg.style.height="10px"
    crossImg.style.width="10px"
    para.style.margin="auto"
    para.style.flex="1"
    para.style.border="1px solid black"
    newdiv.style.display="flex"
    // newdiv.style.border="1px solid black"
    newdiv.style.marginTop="5px"
    newdiv.style.gap="1px"
    taskContainer.appendChild(newdiv)
    //Event Listner
    completeBtn.addEventListener("click",completedTasks)
    notCompleteBtn.addEventListener("click",nonCompletedTasks)
    notCompleteBtn.addEventListener("click",removeTask)
    completeBtn.addEventListener("click",removeTask)
}


function completedTasks(){
    complet+=1
    completedTask.innerText=`Completed: ${complet}`
}

function nonCompletedTasks(){
    notComplete+=1
    notCompletedTasks.innerText=`Not Completed: ${notComplete}`
}
function removeTask(){
    let taskToremove=newdiv
    newdiv.remove()
}

//Event Listeners
addButton.addEventListener("click",addTasks)
addButton.addEventListener("click",addTaskToList)


// TO-DO-APP
//Selectors
const inputBox=document.getElementById("inputTasks")
const addButton=document.getElementById("addButton")
const searchBox=document.getElementById("searchBox")
const searchButton=document.getElementById("searchButton")
const taskContainer=document.getElementById("taskContainer") 
const completedTaskRender=document.getElementById("completedTasks")
const incompletedTaskRender=document.getElementById("incompletedTasks")
//Variables and Lists
let taskList=[]
let idCount=0
let tasktoAdd={}
let completeCount=1
let incompleteCount=1
completedTaskRender.innerHTML="Completed : 0"
incompletedTaskRender.innerHTML="Incompleted : 0"
//Functions
function addTask(){
    const task=inputBox.value
    if(task=="")return
    tasktoAdd={
        id:idCount,
        name:task
    }
    idCount++
    taskList.push(tasktoAdd)
    displayTask(tasktoAdd)

}
function displayTask(t){
    const task=t["name"]
    const para=document.createElement("p")
    para.setAttribute("task-id",t["id"])
    const tickButton=document.createElement("button")
    const crossButton=document.createElement("button")
    const tickImg=document.createElement("img")
    const crossImg=document.createElement("img")
    tickImg.src="https://cdn-icons-png.flaticon.com/128/9258/9258209.png"
    crossImg.src="https://cdn-icons-png.flaticon.com/128/18962/18962545.png"
    tickImg.style.height="10px"
    crossImg.style.height="10px"
    tickButton.appendChild(tickImg)
    crossButton.appendChild(crossImg)
    para.innerText=`${task}`
    para.appendChild(tickButton)
    para.appendChild(crossButton)
    tickButton.style.marginLeft="10px"
    taskContainer.appendChild(para)
    crossButton.addEventListener("click",function (){
        taskList=taskList.filter(item=>item.id!=t.id)
        para.remove()
    })
    tickButton.addEventListener("click",function (){
        taskList=taskList.filter(item=>item.id!=t.id)
        para.remove()
    })
    tickButton.addEventListener("click",completedTasksrender)
    crossButton.addEventListener("click",incompletedTasksrender)
   
}
function removeImput(){
    inputBox.value=""
}
function removeTask(){
    tasktoAdd["id"].remove()
}
function completedTasksrender(){
    completedTaskRender.innerText=`Completed: ${completeCount}`
    completeCount++
}
function incompletedTasksrender(){
    incompletedTaskRender.innerText=`Incompleted: ${incompleteCount}`
    incompleteCount++
}

//Event Listners
addButton.addEventListener("click",addTask)
addButton.addEventListener("click",removeImput)

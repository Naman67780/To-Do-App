// TO-DO-APP
//Selectors
const inputBox=document.getElementById("inputTasks")
const addButton=document.getElementById("addButton")
const searchBox=document.getElementById("searchBox")
const searchButton=document.getElementById("searchButton")
const taskContainer=document.getElementById("taskContainer") 

//Variables and Lists
let taskList=[]
//Functions
function addTask(){
    const task=inputBox.value
    taskList.push(task)
}
function displayTask(){
    const task=inputBox.value
    const para=document.createElement("p")
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
    //Inner Functions
   
}
function removeImput(){
    inputBox.value=""
}

//Event Listners
addButton.addEventListener("click",displayTask)
addButton.addEventListener("click",removeImput)
console.log(taskList)

// TO-DO-App
let addBox=document.getElementById("tasks")
let addButton=document.getElementById("addButton")
let searchBox=document.getElementById("search")
let searchButton=document.getElementById("searchButton")
let taskContainer=document.getElementById("taskContainer")


//Lists
let tasks=[]

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
    let newdiv=document.createElement("div")
    let para=document.createElement("p")
    let completeBtn=document.createElement("button")
    let tickImg=document.createElement("img")
    let notCompleteBtn=document.createElement("button")
    let crossImg=document.createElement("img")
    //Inner Html
    para.innerHTML=`${task}`
    tickImg.src="https://cdn-icons-png.flaticon.com/128/7103/7103702.png"
    //Adding elements
    completeBtn.appendChild(tickImg)
    newdiv.appendChild(para)
    newdiv.appendChild(completeBtn)
    //Styles
    tickImg.style.height="10px"
    tickImg.style.width="10px"
    para.style.margin="auto"
    para.style.flex="1"
    newdiv.style.display="flex"
    newdiv.style.border="1px solid black"
    newdiv.style.marginTop="5px"
    newdiv.style.gap="1px"
    taskContainer.appendChild(newdiv)
}
//Event Listeners
addButton.addEventListener("click",addTasks)
addButton.addEventListener("click",addTaskToList)

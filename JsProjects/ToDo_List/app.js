const title=document.getElementById("title");
const description= document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

const task=localStorage.getItem("task")?JSON.parse(localStorage.getItem('task')):[];
 showAllTask();
form.addEventListener("submit",addTask);
function addTask(e){
    e.preventDefault();
    removetask();
    task.push({
        Title: title.value ,
        description: description.value
    });
    console.log(task);
    localStorage.setItem("task",JSON.stringify(task));
    showAllTask();
}
function showAllTask(){
    task.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv=document.createElement("div");
        div.append(innerdiv);
        const para=document.createElement("p");
        para.innerText=value.Title;
        innerdiv.append(para);
        const span=document.createElement('span');
        span.innerText=value.description;
        innerdiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            removetask();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            showAllTask();
            console.log(task);
        })
        div.append(btn);
        container.append(div);

    });
}

function removetask(){
    task.forEach((value)=>{
         const div=document.querySelector(".task");
         div.remove();
    })

}
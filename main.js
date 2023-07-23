///////////    to do list 
const btn = document.querySelector("button");
const dad = document.querySelector("#dad");
const val = document.querySelector("#input");
// const rem = document.getElementById("dad")
const test = document.getElementById("test");
const rem_up = document.getElementsByClassName(".icons-box-r");
const checkbox = document.getElementById("checkbox");
const finished_list = document.getElementById("finished-list");
const warn = document.querySelector(".warning")

// warn.classList.remove('hide');

// btn.getElementsByClassName.backgroundColor = "red";

btn.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(val.value == ''){
        warn.classList.remove('hide');
    }else{
 const task = `
            <div class="atask-container">                             <!------ one task ------->
                <div class="icons-box-l"><span class="icon-checkbox-unchecked"></span></div>
                <div class="task-text">
                    <p class="txt-ovrflw-elpss">${val.value}</p>
                </div>
                <div class="icons-box-r">
                    <span class="icon-spinner11"></span>
                    <span class="icon-bin"></span>
                </div>
            </div>
        `;
    dad.innerHTML += task;
    val.value = '';
    }    
})
// remove
dad.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(eo.target.className == "icon-bin" )
    eo.target.parentElement.parentElement.remove()
})
finished_list.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(eo.target.className == "icon-bin" )
    eo.target.parentElement.parentElement.remove()
})
// update 
dad.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(eo.target.className == "icon-spinner11") {
        if(val.value == ''){
            warn.classList.remove('hide');
        }else{
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].getElementsByTagName("p")[0].innerHTML=val.value;
        val.value = '';} 
     }     
})
finished_list.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(eo.target.className == "icon-spinner11") {
        if(val.value == ''){
            warn.classList.remove('hide');
        }else{
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].getElementsByTagName("p")[0].innerHTML=val.value;
        val.value = '';} 
     } 
})
// move from todo list to finish
dad.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(eo.target.className == "icon-checkbox-unchecked"){
        eo.target.classList.add("icon-checkbox-checked");
        eo.target.classList.remove("icon-checkbox-unchecked");
        let node = eo.target.parentElement.parentElement;
        let clone = node.cloneNode(true);
        finished_list.appendChild(clone);
        node.remove()
    }
})
// move from finish to todo list
finished_list.addEventListener("click",(eo)=>{
    eo.preventDefault()
    if(eo.target.className == "icon-checkbox-checked"){
        eo.target.classList.add("icon-checkbox-unchecked");
        eo.target.classList.remove("icon-checkbox-checked");
        let node = eo.target.parentElement.parentElement;
        let clone = node.cloneNode(true);
        dad.appendChild(clone);
        node.remove()
        
    }
})


/*
MIME type بنحدد نوع الداتةاللي راجعة من https request

*/
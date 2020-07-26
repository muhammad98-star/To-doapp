var list = document.getElementById("list");




function addtodo(){
    var item= document.getElementById("item");
    
    var li = document.createElement('li')
    var liText = document.createTextNode(item.value)
    li.appendChild(liText)

    var delbtn = document.createElement("button")
    var deltxt = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","delitem(this)")
    delbtn.appendChild(deltxt)
    
    var editbtn = document.createElement("button")
    var edittxt = document.createTextNode("Edit")
    editbtn.appendChild(edittxt)
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","edititem(this)")


    li.appendChild(delbtn)
    li.appendChild(editbtn)


    list.appendChild(li)


    item.value= ""
    console.log(li)
}
function delitem(a){
    a.parentNode.remove()
}

function edititem(a){
    var val = prompt("Enter updated value",a.parentNode.firstChild.nodeValue)
    a.parentNode.firstChild.nodeValue = val
}

function deleteAll(){
    list.innerHTML=""
}


document.body.onload = addElement;

function addElement(){
    const newDiv = document.createElement("div");
    const temp = document.createElement("input");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(temp);
    newDiv.appendChild(newContent);

    const atual = document.getElementById("container");
    document.body.insertBefore(newDiv, atual);
}

var updates = document.querySelectorAll('.update')

Array.from(updates).forEach(function (update) {
    update.addEventListener('click', createForm)
})

function createForm (event) {
    event.preventDefault();
    console.log(event.target);
    var btn = event.target;
    
    var id = btn.parentElement.dataset.id;
    var name = btn.parentElement.dataset.name;
    var color = btn.parentElement.dataset.color;
    console.log(id, name, color);
    
    
    document.querySelector("#nameInput").value = name;
    document.querySelector("#colorInput").value = color;
    
    document.querySelector("#formCreate").style.display= "none";
    document.querySelector("#formUpdate").style.display= "flex";


    document.querySelector("#patch").action ="/candies/" + id + "?_method=PATCH";
    document.querySelector("#post").action ="/candies/" + id + "?_method=DELETE";   
}

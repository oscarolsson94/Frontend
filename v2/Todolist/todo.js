
//
todoList = [];
doneList = [];

//Övning 2
function addToList(todoItem) {
    todoList.push(todoItem);
    return todoList;
}

//Övning 3
function addToTopOfList(todoItem){
    todoList.unshift(todoItem);
    return todoList; 
}


//Övning 4
function removeFromBottomOfList(){
    let borttagenSak = todoList.pop();
    return borttagenSak; 
}

//Övning 5
function removeFromTopOfList(){
    let borttagenSak = todoList.shift();
    return borttagenSak; 
}

//Övning 6
// Ta bort todoItem på plats index (ett nummer) i todoList arrayen.
// Returnera todoItem som en sträng!
function removeFromListByIndex(index){
    if ( index < 0){
        console.log("index must not be < 0");
        return "invalid";
    }

    //splice tar bort sak på givet index, 
    //och antal saker som parameter 2 anger, i detta fall 1 
    //tillbaka får vi en array av borttagna saker.
    //i detta fall ==> removedItems = ["städa", ..., ....]
    let arrayOfDeletedItems = todoList.splice(index, 1);
    return arrayOfDeletedItems[0];
}

//Övning 7
function removeFromListByName(todoItemName){
    //Leta upp vilken position i listan som saken finns.
    let index = todoList.indexOf(todoItemName);

    //Nu vet vi index! Använd föregående övnings funktion för att ta bort!
    let removedItem = removeFromListByIndex(index);

    //Returnera bortplockad sak.
    return removedItem;
}


//Övning 8
function removeFromListAndAddToDone(todoItemName){
    removeFromListByName(todoItemName);
    doneList.push(todoItemName);
    return doneList;
}

//Övning 9
function moveToTop(todoItemName){
    //Ta ut ett item
    removeFromListByName(todoItemName);

    //Flytta till toppen!
    addToTopOfList(todoItemName);

    return todoList; //returnera listan
}

//Övning 10
function moveToBottom(todoItemName){
    //Ta ut ett item
    removeFromListByName(todoItemName);

    //Flytta till toppen!
    addToList(todoItemName);

    return todoList; //glöm inte att returnera listan!
}

//Övning 11
function moveDown(todoItemName){
    //Ta ut ett item
    let index = todoList.indexOf(todoItemName); //hitta index för den här saken

    if (index >= todoList.length-1) //kolla om item redan ligger sist...
        return; //gör inget isåfall!

    removeFromListByName(todoItemName); //ta bort saken
    todoList.splice(index+1, 0, todoItemName); //lägg till den igen på index + 1, dvs ett steg längre ner
}

//Övning 12
function moveUp(todoItemName){
    //Ta ut ett item
    let index = todoList.indexOf(todoItemName); //hitta index för den här saken

    if (index <=0) //kolla om det går att flytta upp den...
        return; //redan överst, eller ogiltigt värde

    removeFromListByName(todoItemName); //ta bort saken
    todoList.splice(index-1, 0, todoItemName); //lägg till den igen på index - 1, dvs ett steg längre ner
}
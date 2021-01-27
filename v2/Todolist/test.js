


//Lägg saker till vår todoList...
addToList("diska"); //denna hamnar på plats 0 i todoList
addToList("städa"); //denna hamnar på plats 1 i todoList
addToList("tvätta");
addToList("gå ut med hunden");
addToList("bädda sängen");
addToList("göra läxan");
addToList("laga mat");
addToList("jogga");

//Övning 3
let modifiedList = addToTopOfList("simma");
console.log(modifiedList);

//Övning 4
let nyligenBortplockadSak = removeFromBottomOfList();
console.log(nyligenBortplockadSak);
console.log("Lista efter removeFromBottomOfList: "+todoList); //skriv ut i console


//Övning 5
let bortplockadFrånBorjan = removeFromTopOfList();
console.log(bortplockadFrånBorjan);
console.log("Lista efter removeFromTopOfList: "+todoList); //skriv ut i console

//Övning 6
//let invalidSak = removeFromListByIndex(-3);
let bortplockadSakPåIndex = removeFromListByIndex(2);
console.log("Denna sak togs bort: "+bortplockadSakPåIndex);
console.log("Lista efter removeFromListByIndex: "+todoList); //skriv ut i console

//Övning 7
let bortplockadSakMedNamn = removeFromListByName("diska");
console.log("Denna sak togs bort: "+bortplockadSakMedNamn);
console.log("Lista efter removeFromListByName: "+todoList); //skriv ut i console

//Övning 8
let newDoneList = removeFromListAndAddToDone("bädda sängen");
console.log("Den nya Done listan: "+newDoneList);
console.log("Lista efter removeFromListAndAddToDone: "+todoList); //skriv ut i console

//Övning 9
let newTodoList = moveToTop("göra läxan");
console.log("Lista efter moveToTop [göra läxan]: "+newTodoList); //skriv ut i console

//Övning 10
let listAfterMoveToBottom = moveToBottom("städa");
console.log("Lista efter moveToBottom [städa]: "+listAfterMoveToBottom); //skriv ut i console

//Övning 11
moveDown("laga mat");
console.log("Lista efter moveDown [laga mat]: "+todoList); //skriv ut i console

//Övning 12
moveUp("städa");
console.log("Lista efter moveUp [städa]: "+todoList); //skriv ut i console


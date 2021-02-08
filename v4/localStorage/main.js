if (!store.name) {
    store.name = prompt("Vad heter du?");
    store.save();
}
else {
    alert("Välkommen tillbaka " + store.name);
}
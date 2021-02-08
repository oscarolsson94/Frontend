let store = {};
try {
  store = JSON.parse(localStorage.store);
} catch (e) { }
store.save = function () {
  localStorage.store = JSON.stringify(this);
}
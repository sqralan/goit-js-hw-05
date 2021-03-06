class Storage { 
    constructor(items) {
        this.items = items
    }
    getItems = function () {
        return this.items
    }
    addItem = function (newItem) {
        if (!this.items.includes(newItem)) {
            this.items.push(newItem)
        }

    }
    removeItem = function (killItem) { 
        if (this.items.includes(killItem)) {
           this.items.splice(this.items.indexOf(killItem),1) 
         }

    }

}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }


    get(key) {
        return this.map[key];
    }


    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}


let myHashMap = new HashMap();


myHashMap.put('a', 1);
myHashMap.put('b', 2);
myHashMap.put('c', 3);


console.log(myHashMap.get('a')); 
console.log(myHashMap.get('b')); 
console.log(myHashMap.get('c')); 


myHashMap.remove('b');
console.log(myHashMap.get('b'));

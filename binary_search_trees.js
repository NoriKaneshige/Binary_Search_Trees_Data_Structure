
// Node class creation

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// class method creation for BinarySearchTree

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

// We don't want to do this blow, let's make a method

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);


// run code results

var tree = new BinarySearchTree();
tree.insert(10)
console.log(tree) // BinarySearchTree { root: Node { value: 10, left: null, right: null } }
tree.insert(5)
console.log(tree)
// BinarySearchTree {
//   root: Node {
//     value: 10,
//     left: Node { value: 5, left: null, right: null },
//     right: null
//   }
// }
tree.insert(13)
console.log(tree)
// BinarySearchTree {
//   root: Node {
//     value: 10,
//     left: Node { value: 5, left: null, right: null },
//     right: Node { value: 13, left: null, right: null }
//   }
// }
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree)
// BinarySearchTree {
//   root: Node {
//     value: 10,
//     left: Node { value: 5, left: [Node], right: [Node] },
//     right: Node { value: 13, left: [Node], right: [Node] }
//   }
// }
console.log(tree.find(7)) // Node { value: 7, left: null, right: null }
console.log(tree.contains(7)) // true
console.log(tree.find(1)) // undefined
console.log(tree.contains(1)) // false


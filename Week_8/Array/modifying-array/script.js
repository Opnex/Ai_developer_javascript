//                                 **Array Methods Summary:**
// - `push()` - Add to end
// - `pop()` - Remove from end  
// - `unshift()` - Add to beginning
// - `shift()` - Remove from beginning
// - `includes()` - Check if item exists
// - `indexOf()` - Find item's position
                                
                                // Modifying Arrays
let colors = ["red", "green", "blue"];
console.log("Original colors: ", colors);

// Changing existing elements
colors[0] = "purple";
colors[2] = "yellow";
console.log("After changes:", colors);

console.log(""); // Empty line

// Adding elements to the end with push()
let shoppingList = ["milk", "bread"]
console.log("Original list:", shoppingList);

shoppingList.push("eggs");
shoppingList.push("cheese", "butter"); // Can add multiple items
console.log("After adding items:", shoppingList);

console.log(""); // Empty line

// Removing the last element with pop()
let removedItem = shoppingList.pop(); // pop() returns the removed item
console.log("Removed item:", removedItem);
console.log("List after removing:", shoppingList);

console.log(""); // Empty line

// Adding elements to the beginning with unshift()
shoppingList.unshift("apples");
console.log("After adding to front:", shoppingList);

// Removing the first element with shift()
let firstItem = shoppingList.shift();
console.log("Removed first item:", firstItem);
console.log("Final list:", shoppingList);

console.log(""); // Empty line

// Finding elements
let students = ["Alice", "Bob", "Charlie", "Diana"];
console.log("Students:", students);
console.log("Is Bob in class?", students.includes("Bob"));
console.log("Where is Charlie?", students.indexOf("Charlie"));
console.log("Where is Frank?", students.indexOf("Frank")); // -1 means not found
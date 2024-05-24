"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let faverateplaces = ["saudi arabia ", " tarki", "japan", "sewdan", "narva",];
//• Print your array in its original order.
console.log("original order. " + faverateplaces + "\n");
//• Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order. " + [...faverateplaces].sort() + "\n");
//• Show that your array is still in its original order by printing it.
console.log("original order. " + faverateplaces + "\n");
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(" reverse alphabetical order. " + [...faverateplaces].reverse() + "\n");
//• Show that your array is still in its original order by printing it again.
console.log("original order." + faverateplaces + "\n");
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("order of your list." + faverateplaces.reverse() + "\n");
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("order of your list." + faverateplaces.reverse() + "\n");
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order." + faverateplaces.sort() + "\n");
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("alphabetical order." + faverateplaces.reverse() + "\n");

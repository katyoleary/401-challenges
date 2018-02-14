'use strict';
 
const traverse = engine => {
    count += engine.value;
    if(engine.next) {
        traverse(engine.next)
    }
   return count;
}
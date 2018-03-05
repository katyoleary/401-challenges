'use strict';

function addItem(queue, item) {
  queue[queue.length] = item;
  queue.length++;
  return queue;
}

const queue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  next: 0,
  length: 3
}

module.exports = {
  'addItem': addItem,
  'queue': queue
}



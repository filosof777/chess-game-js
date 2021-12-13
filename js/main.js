let elBoardList = document.querySelector('.chess__list');
// let elItem = undefined;

let chessBoards = [
  {
    id: 11,
    x: 1,
    y: 1,
    color: '#f0D9b5'
  },
  {
    id: 12,
    x: 2,
    y: 1,
    color: '#b58863'
  },
  {
    id: 13,
    x: 3,
    y: 1,
    color: '#f0D9b5'
  },
  {
    id: 14,
    x: 4,
    y: 1,
    color: '#b58863'
  },
  {
    id: 15,
    x: 5,
    y: 1,
    color: '#f0D9b5'
  },
  {
    id: 16,
    x: 6,
    y: 1,
    color: '#b58863'
  },
  {
    id: 17,
    x: 7,
    y: 1,
    color: '#f0D9b5'
  },
  {
    id: 18,
    x: 8,
    y: 1,
    color: '#b58863'
  },
  {
    id: 21,
    x: 1,
    y: 2,
    color: '#b58863'
  },
  {
    id: 22,
    x: 2,
    y: 2,
    color: '#f0D9b5'
  },
  {
    id: 23,
    x: 3,
    y: 2,
    color: '#b58863'
  },
  {
    id: 24,
    x: 4,
    y: 2,
    color: '#f0D9b5'
  },
  {
    id: 25,
    x: 5,
    y: 2,
    color: '#b58863'
  },
  {
    id: 26,
    x: 6,
    y: 2,
    color: '#f0D9b5'
  },
  {
    id: 27,
    x: 7,
    y: 2,
    color: '#b58863'
  },
  {
    id: 28,
    x: 8,
    y: 2,
    color: '#f0D9b5'
  },
  {
    id: 31,
    x: 1,
    y: 3,
    color: '#f0D9b5'
  },
  {
    id: 32,
    x: 2,
    y: 3,
    color: '#b58863'
  },
  {
    id: 33,
    x: 3,
    y: 3,
    color: '#f0D9b5'
  },
  {
    id: 34,
    x: 4,
    y: 3,
    color: '#b58863'
  },
  {
    id: 35,
    x: 5,
    y: 3,
    color: '#f0D9b5'
  },
  {
    id: 36,
    x: 6,
    y: 3,
    color: '#b58863'
  },
  {
    id: 37,
    x: 7,
    y: 3,
    color: '#f0D9b5'
  },
  {
    id: 38,
    x: 8,
    y: 3,
    color: '#b58863'
  },
  {
    id: 41,
    x: 1,
    y: 4,
    color: '#b58863'
  },
  {
    id: 42,
    x: 2,
    y: 4,
    color: '#f0D9b5'
  },
  {
    id: 43,
    x: 3,
    y: 4,
    color: '#b58863'
  },
  {
    id: 44,
    x: 4,
    y: 4,
    color: '#f0D9b5'
  },
  {
    id: 45,
    x: 5,
    y: 4,
    color: '#b58863'
  },
  {
    id: 46,
    x: 6,
    y: 4,
    color: '#f0D9b5'
  },
  {
    id: 47,
    x: 7,
    y: 4,
    color: '#b58863'
  },
  {
    id: 48,
    x: 8,
    y: 4,
    color: '#f0D9b5'
  },
  {
    id: 51,
    x: 1,
    y: 5,
    color: '#f0D9b5'
  },
  {
    id: 52,
    x: 2,
    y: 5,
    color: '#b58863'
  },
  {
    id: 53,
    x: 3,
    y: 5,
    color: '#f0D9b5'
  },
  {
    id: 54,
    x: 4,
    y: 5,
    color: '#b58863'
  },
  {
    id: 55,
    x: 5,
    y: 5,
    color: '#f0D9b5'
  },
  {
    id: 56,
    x: 6,
    y: 5,
    color: '#b58863'
  },
  {
    id: 57,
    x: 7,
    y: 5,
    color: '#f0D9b5'
  },
  {
    id: 58,
    x: 8,
    y: 5,
    color: '#b58863'
  },
  {
    id: 61,
    x: 1,
    y: 6,
    color: '#b58863'
  },
  {
    id: 62,
    x: 2,
    y: 6,
    color: '#f0D9b5'
  },
  {
    id: 63,
    x: 3,
    y: 6,
    color: '#b58863'
  },
  {
    id: 64,
    x: 4,
    y: 6,
    color: '#f0D9b5'
  },
  {
    id: 65,
    x: 5,
    y: 6,
    color: '#b58863'
  },
  {
    id: 66,
    x: 6,
    y: 6,
    color: '#f0D9b5'
  },
  {
    id: 67,
    x: 7,
    y: 6,
    color: '#b58863'
  },
  {
    id: 68,
    x: 8,
    y: 6,
    color: '#f0D9b5'
  },
  {
    id: 71,
    x: 1,
    y: 7,
    color: '#f0D9b5'
  },
  {
    id: 72,
    x: 2,
    y: 7,
    color: '#b58863'
  },
  {
    id: 73,
    x: 3,
    y: 7,
    color: '#f0D9b5'
  },
  {
    id: 74,
    x: 4,
    y: 7,
    color: '#b58863'
  },
  {
    id: 75,
    x: 5,
    y: 7,
    color: '#f0D9b5'
  },
  {
    id: 76,
    x: 6,
    y: 7,
    color: '#b58863'
  },
  {
    id: 77,
    x: 7,
    y: 7,
    color: '#f0D9b5'
  },
  {
    id: 78,
    x: 8,
    y: 7,
    color: '#b58863'
  },
  {
    id: 81,
    x: 1,
    y: 8,
    color: '#b58863'
  },
  {
    id: 82,
    x: 2,
    y: 8,
    color: '#f0D9b5'
  },
  {
    id: 83,
    x: 3,
    y: 8,
    color: '#b58863'
  },
  {
    id: 84,
    x: 4,
    y: 8,
    color: '#f0D9b5'
  },
  {
    id: 85,
    x: 5,
    y: 8,
    color: '#b58863'
  },
  {
    id: 86,
    x: 6,
    y: 8,
    color: '#f0D9b5'
  },
  {
    id: 87,
    x: 7,
    y: 8,
    color: '#b58863'
  },
  {
    id: 88,
    x: 8,
    y: 8,
    color: '#f0D9b5'
  }
];




for (item of chessBoards) {
  var elItem = document.createElement('li');
  elItem.style.backgroundColor = item.color;
  elItem.setAttribute('id', item.id);
  elItem.classList = ('chess__item');
  elBoardList.appendChild(elItem);
  // console.log(item);
}

elBoardList.addEventListener('click', (e) => {
  for (item of chessBoards) {
    for (let j = 1; j <= 8; j++) {
      if (e.target.id == item.id) {
        let sum = Math.floor(item.id /= 10);
        // elItem.style.backgroundColor = 'red'
        // console.log(item.color);
        item.id += sum
        e.target.style.backgroundColor = 'red'
        
      // console.log(++item.id);
        // console.log(item = 1);
        // item.x = j;
        // item.y = j;
        // console.log(`bu x = ${j} bu item ${item.x}`);
        // console.log(`bu y = ${j} bu item ${item.y}`);
        // item.i
        // console.log(item.x);
      }
      // console.log(item.id);
      // console.log(item.x);
      // console.log(item.y);
      // console.log(item.color);
      // console.log(item.color);
      // console.log(item);
      // console.log(564654);
    // console.log(item.id);
    // console.log(e.target.id);
    }
  }
});

let elStoneList = document.querySelector('.stone__list');
let elStoneItem = document.querySelector('.stone__item');

elStoneList.addEventListener('click', (e) => {
  // e.target.classList.con
  console.log(5645);
})

// elItem.addEventListener('click', (e) => {
//   console.log(564654);
//   if (e.target) {

//     for (item of chessBoards) {
//       console.log(item);
//     }
//   }
  // console.log(e.target.id);
  // console.log(li.id);

    // console.log(i[i.x])
    // console.log(li.y)
    // console.log(i.x);
    // console.log(i.y);
    // console.log(i);
  
// })

// for (let i = 1; i <= 8; i++) {

//   if (e.target.id == li.id) {
//     console.log(i.x);
//     if (i == 5) {
      
//       console.log(i);
//       li.style.backgroundColor = 'green';
//     }
//   }
// }
// console.log(chessBoards);

// elBoardItem = document.querySelector('.chess__item');
// console.log(elBoardItem);

// elBoardList.addEventListener

// elBoardItem.addEventListener('click', (e) => {
//   console.log(e.target);
// })


// for (let i = 1; i <= 64; i++) {
//   if(i % 2 == 0) {
//     let li = document.createElement('li');
//     li.classList = ('chess__black');
//     li.style.backgroundColor = 'black';
//     elBoardList.appendChild(li)

//   } else if (i % 2 == 1) {
//     let li = document.createElement('li');
//     li.classList = ('chess__white');
//     li.style.backgroundColor = 'white';
//     elBoardList.appendChild(li)
//   }
// }
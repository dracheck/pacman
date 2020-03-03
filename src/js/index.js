const app = document.querySelector('#app');
const stage1 = new stage(15,11,85);
stage1.mount(app);
const stageDiv = document.querySelector('.stage');


const responsePromise = fetch('http://bootcamp.podlomar.org/api/pacman?width=15&height=11')
  .then(response => response.json())
  .then(json => {
    for(const wall of json.walls){
    let newWall = new entity(wall.x, wall.y,'wall');
    newWall.mount(stageDiv);
  }
    for (const apple of json.apples) {
      let apples = new entity(apple.x, apple.y,'apple');
      apples.mount(stageDiv);
    }
    for (const bomb of json.bombs) {
      let bombs = new entity(bomb.x, bomb.y,'bomb');
      bombs.mount(stageDiv);
    }
 }
)



document.addEventListener('DOMContentLoaded',()=>{
  const pacman1 = new Pacman(100, 100, 'closed','Martin');
  pacman1.mount(stageDiv);












  // const wall1 = new entity(1,1,'wall');
  // const wall2 = new entity(4,5,'wall');
  // const wall3 = new entity(5,4,'wall');

  // pacman1.mount(stage);
  // // pacman1.updatexMax();
  // wall1.mount(stage);
  // wall2.mount(stage);
  // wall3.mount(stage);

  // const bomb1 = new entity(3,2,'bomb');
  // bomb1.mount(stage);

  // const apple1 = new entity(2,2,'apple');
  // apple1.mount(stage);


  // console.log(pacman1);

});










// const tileSize = 85;

// class Pacman {
//   constructor(xposition, yposition, mouth){
//     this.xposition = xposition;
//     this.yposition = yposition;
//     this.mouth = mouth;
    
//   }

//   moveRight() {
//     this.element.style.backgroundPositionX = '85px';
//     this.xposition += tileSize;
//   if (this.mouth === 'closed') {
//     this.element.style.backgroundPositionX = '0px';
//     this.element.style.backgroundPositionY = '0px';
//     this.mouth = 'open';
//   } else { 
//     this.element.style.backgroundPositionX = '85px';
//     this.element.style.backgroundPositionY = '0px';
//     this.mouth = 'closed';
//   }
//   }

//   moveLeft() {
//     this.element.style.backgroundPositionX = '85px';
//     this.xposition -= tileSize;
 
//   if (this.mouth === 'open') {
//     this.element.style.backgroundPositionX = '0px';
//     this.element.style.backgroundPositionY = '255px';
//     this.mouth = 'closed';
//   } else { 
//     this.element.style.backgroundPositionX = '85px';
//     this.element.style.backgroundPositionY = '255px';
//     this.mouth = 'open';
//   }

//   }

//   moveDown() {
//     this.element.style.backgroundPositionX = '85px';
//     this.yposition += tileSize;
//     if (this.mouth === 'open') {
//       this.element.style.backgroundPositionX = '0px';
//       this.element.style.backgroundPositionY = '170px';
//       this.mouth = 'closed';
//     } else { 
//       this.element.style.backgroundPositionX = '85px';
//       this.element.style.backgroundPositionY = '170px';
//       this.mouth = 'open';
//       }
//   }

//   moveUp() {
//     this.element.style.backgroundPositionX = '85px';
//     this.yposition -= tileSize;
//     if (this.mouth === 'open') {
//       this.element.style.backgroundPositionX = '0px';
//       this.element.style.backgroundPositionY = '85px';
//       this.mouth = 'closed';
//     } else { 
//       this.element.style.backgroundPositionX = '85px';
//       this.element.style.backgroundPositionY = '85px';
//       this.mouth = 'open';
//     }
//   }

//   render() {
//     this.element = document.createElement('div');
//     this.element.className = 'entity entity--pac pacboy-active-light';

//     document.addEventListener('keydown', (event) => {
//     if(event.key === 'ArrowRight') {
//       this.moveRight();
//       this.update();
//     }
//   });

//   document.addEventListener('keydown', (event) => {
//     if(event.key === 'ArrowLeft') {
//       this.moveLeft();
//       this.update();
//     }
//   });


//   document.addEventListener('keydown', (event) => {
//     if(event.key === 'ArrowUp') {
//       this.moveUp();
//       this.update();
//      }
//   });

//   document.addEventListener('keydown', (event) => {
//     if(event.key === 'ArrowDown') {
//       this.moveDown();
//       this.update();
//     }
//   });
// }

//   update() {
//     this.element.style.left = String(this.xposition) + `px`;
//     this.element.style.top = String(this.yposition) + `px`;  
//   }

//   mount(parent) {
//     this.render();
//     this.update();
//     parent.appendChild(this.element);
//   }
// }

// const app = document.querySelector('#app');
// const pacman1 = new Pacman(100, 100, 'closed');
// pacman1.mount(app);








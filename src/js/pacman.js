const tileSize = 85;

class Pacman {
  constructor(mouth, Xmax, Ymax, name, gender, style){
    this.xposition = 0;
    this.yposition = 0;
    this.mouth = mouth;
    this.Xmax = Xmax;
    this.Ymax = Ymax;
    this.stage = stage1;
    this.alive = 'alive';
    this.score = 0;
    this.name = name;
    this.gender = gender;
    this.style = style;
  }

  updatexMax() {
    this.Xmax = stage1.maxX();
    return this.Xmax;
  }

  updateyMax() {
    this.Ymax = stage1.maxY();
    return this.Ymax;
  }

  detectCollision(futureX, futureY) {
    if(stage1.collisionDetection(futureX, futureY) === null) {
      return true;
    } else {
      return stage1.collisionDetection(futureX, futureY);
    }
    
  }

  pacmanBomb() {
    const coinToss = Math.random()*2;
    if(coinToss > 1) {
      this.element.className = 'entity entity--tomb';
      this.alive = 'dead';
      return true;
    } else {
      return false;
    }
  }

  checkAlive() {
    if(this.alive === 'alive') {
      return true;
    } else {
      return false;
    }
  }


  moveRight() {
    if(this.checkAlive() === false) {
      return;
    }
    this.element.style.backgroundPositionX = '85px';
    if(this.xposition === this.Xmax - 1) {
      return;
    }   
  if (this.mouth === 'closed') {
    this.element.style.backgroundPositionX = '0px';
    this.element.style.backgroundPositionY = '0px';
    this.mouth = 'open';
  } else { 
    this.element.style.backgroundPositionX = '85px';
    this.element.style.backgroundPositionY = '0px';
    this.mouth = 'closed';
  }
  const objectDetected = this.detectCollision(this.xposition+1, this.yposition);

  if (objectDetected === true) {
    this.xposition += 1;
  } else if (objectDetected.type === 'apple') {
    objectDetected.unmount();
    stage1.removeEntity(objectDetected);
    this.score += 1;
    this.xposition += 1;
  } else if (objectDetected.type === 'bomb') {
    objectDetected.unmount();
    stage1.removeEntity(objectDetected);
    this.xposition += 1;
    this.pacmanBomb();
  }
}

  moveLeft() {
    if(this.checkAlive() === false) {
      return;
    }

    this.element.style.backgroundPositionX = '85px';

    if(this.xposition === 0) {
      return;
    }
  if (this.mouth === 'open') {
    this.element.style.backgroundPositionX = '0px';
    this.element.style.backgroundPositionY = '255px';
    this.mouth = 'closed';
  } else { 
    this.element.style.backgroundPositionX = '85px';
    this.element.style.backgroundPositionY = '255px';
    this.mouth = 'open';
  }
  const objectDetected = this.detectCollision(this.xposition-1, this.yposition);

  if (objectDetected === true) {
    this.xposition -= 1;
  } else if (objectDetected.type === 'apple') {
    objectDetected.unmount();
    stage1.removeEntity(objectDetected);
    this.xposition -= 1;
    this.score += 1;
  } else if (objectDetected.type === 'bomb') {
    objectDetected.unmount();
    stage1.removeEntity(objectDetected);
    this.xposition -= 1;
    this.pacmanBomb();
  }
}

  moveDown() {

    if(this.checkAlive() === false) {
      return;
    }

    this.element.style.backgroundPositionX = '85px';
    if(this.yposition === this.Ymax - 1) {
      return;
    }
    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0px';
      this.element.style.backgroundPositionY = '170px';
      this.mouth = 'closed';
    } else { 
      this.element.style.backgroundPositionX = '85px';
      this.element.style.backgroundPositionY = '170px';
      this.mouth = 'open';
      }
    const objectDetected = this.detectCollision(this.xposition, this.yposition+1);

    if (objectDetected === true) {
      this.yposition += 1;
    } else if (objectDetected.type === 'apple') {
      objectDetected.unmount();
      stage1.removeEntity(objectDetected);
      this.yposition += 1;
      this.score += 1;
    } else if (objectDetected.type === 'bomb') {
      objectDetected.unmount();
      stage1.removeEntity(objectDetected);
      this.yposition += 1;
      this.pacmanBomb();
    }
  }

  moveUp() {
    if(this.checkAlive() === false) {
      return;
    }

    this.element.style.backgroundPositionX = '85px';
    if(this.yposition === 0) {
      return;
    }
    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0px';
      this.element.style.backgroundPositionY = '85px';
      this.mouth = 'closed';
    } else { 
      this.element.style.backgroundPositionX = '85px';
      this.element.style.backgroundPositionY = '85px';
      this.mouth = 'open';
    }
    const objectDetected = this.detectCollision(this.xposition, this.yposition-1);

    if (objectDetected === true) {
      this.yposition -= 1;
    } else if (objectDetected.type === 'apple') {
      objectDetected.unmount();
      stage1.removeEntity(objectDetected);
      this.yposition -= 1;
      this.score += 1;
    } else if (objectDetected.type === 'bomb') {
      objectDetected.unmount();
      stage1.removeEntity(objectDetected);
      this.yposition -= 1;
      this.pacmanBomb();
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
      this.moveRight();
      this.update();
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') {
      this.moveLeft();
      this.update();
    }
  });


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
      this.moveUp();
      this.update();
     }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown') {
      this.moveDown();
      this.update();
    }
  });
}

  update() {
    this.element.style.left = String(this.xposition*tileSize) + `px`;
    this.element.style.top = String(this.yposition*tileSize) + `px`;  
    this.element.textContent = `${this.name} ${this.score}`;
  }

  mount(parent) {
    this.render();
    this.update();
    this.updatexMax();
    this.updateyMax();
    parent.appendChild(this.element);
  }
}

// const app = document.querySelector('.stage');
// const pacman1 = new Pacman(100, 100, 'closed');
// pacman1.mount(app);

// document.addEventListener('DOMContentLoaded', () => {

// })
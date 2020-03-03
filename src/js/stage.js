class stage {
  constructor(countX,countY,tileSize) {
    this.countX = countX;
    this.countY = countY;
    this.tileSize = tileSize;
    this.entityArray = [];
  }

  removeEntity(entity) {
    if(undefined) {
      return;
    }
    for (let i = 0; i < this.entityArray.length; i += 1){
      if(this.entityArray[i].posX === entity.posX) {
        if(this.entityArray[i].posY === entity.posY) {
          return this.entityArray.splice(i,1);
        }
      }
    }
  }

  maxX() {
    return this.countX;
  }
  maxY() {
    return this.countY;
  }
  collisionDetection(x,y){
    for (let i = 0; i < this.entityArray.length; i += 1){
      if(this.entityArray[i].posX === x) {
        if(this.entityArray[i].posY === y) {
          return this.entityArray[i];
        }
      }
    }
    return null;
  }

  render(){
    this.element = document.createElement('div');
    this.element.className='stage';
    this.element.innerHTML= (``);
    this.element.style.width=`${this.tileSize*this.countX}px`;
    this.element.style.height=`${this.tileSize*this.countY}px`;
    return this.element;
  }
  mount(parent){
    this.render();
    parent.appendChild(this.element);
  }
}


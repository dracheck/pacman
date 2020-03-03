class entity {
  constructor(posX,posY,type) {
    this.posX = posX;
    this.posY = posY;
    this.type = type;
  }

  pushArray(){
    stage1.entityArray.push(this);
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = `entity entity--${this.type}`;
    this.element.style.left = `${this.posX * 85}px`;
    this.element.style.top = `${this.posY * 85}px`;
    return this.element;
  }
  mount(parent) {
    this.render();
    this.pushArray();
    parent.appendChild(this.element);
  }

  unmount() {
    this.element.parentNode.removeChild(this.element);
  }


}
// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export class Size {
    constructor(width = 80, height = 60) {
      this.width = width
      this.height = height
    }
  
    resize(width, height){
      this.width = width
      this.height = height  
    }
  }
  
  export class Position {
    constructor(x = 0, y = 0) {
      this.x = x
      this.y = y
    }
  
    move(x, y){
      this.x = x
      this.y = y  
    }
  }
  
  export class ProgramWindow {
    constructor(x = 0, y = 0) {
      this.screenSize = new Size(800, 600)
      this.size = new Size()
      this.position = new Position()
      this.oldx = 0
      this.oldy = 0
    }
  
    resize(size){
      this.size.resize(
        size.width <= 0 ? 1 : size.width > 800 ? 800 - this.oldx : size.width, 
        size.height <= 0 ? 1 : size.height > 600 ? 600 - this.oldy : size.height)    
    }
  
    move(position){
      this.oldx = position.x
      this.oldy = position.y
      this.position.move(
        position.x < 0 ? 0 : position.x > 700 ? 700 : position.x,
        position.y < 0 ? 0 : position.y > 500 ? 500 : position.y)    
    }
  }
  
  export function changeWindow(programWindow) {
    const size = new Size(400, 300)
    programWindow.resize(size)
    const position = new Position(100, 150) 
    programWindow.move(position)
    return programWindow
  }  
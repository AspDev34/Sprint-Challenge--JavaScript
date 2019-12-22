// 1. Copy and paste your prototype in here and refactor into class syntax.

function CuboidMaker (length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  CuboidMaker.prototype.volume = function (length, width, height) {
    return length * width * height;
  }

  CuboidMaker.prototype.surfaceArea = function (length, width, height) {
    return 2 * (length * width + length * height + width * height);
  }

  class CuboidMakerClass {
      constructor (length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
      }

      volume (length, width, height) {
        return length * width * height; 
      }

      surfaceArea (length, width, height) {
        return 2 * (length * width + length * height + width * height);
      }
  }

  const cuboidClass = new CuboidMakerClass (4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log("question1", cuboidClass.volume(4, 5, 5)); // 100
console.log("question2", cuboidClass.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
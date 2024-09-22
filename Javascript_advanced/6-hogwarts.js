class studentHogwarts {
    // Private variables
    #privateScore = 0;
    #name = null;
  
    // Private method to change the score
    #changeScoreBy(points) {
      this.#privateScore += points;
    }
  
    // Public methods
    setName(newName) {
      this.#name = newName;
    }
  
    rewardStudent() {
      this.#changeScoreBy(1);
    }
  
    penalizeStudent() {
      this.#changeScoreBy(-1);
    }
  
    getScore() {
      return `${this.#name}: ${this.#privateScore}`;
    }
  }
  
  // Creating the harry instance
  const harry = new studentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); // Output: Harry: 4
  
  // Creating the draco instance
  const draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); // Output: Draco: -2
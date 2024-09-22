const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length; // Calculate the surface area
    }
};

// Create a variable boundGetArea that binds the getArea function to roomDimensions
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Example usage
console.log(`Surface area: ${boundGetArea()} square units`); // Output the area
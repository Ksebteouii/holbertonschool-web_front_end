const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Guillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer"
};

// Create the logWelcomeUser function
function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Create a variable bindLogWelcomeUser that binds logWelcomeUser to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the function with the string "Welcome"
bindLogWelcomeUser("Welcome");
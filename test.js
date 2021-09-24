const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")

brain.search("ph", "How many islands are there in the Philippines?")
    .then(console.log)
    .catch(console.error)
const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")
const country = 'ph'
const fs = require('fs')

const search = async (query) => {
    try {
        function removeTags(str) {
            if ((str === null) || (str === "")) return false
            else str = str.toString()
            return str.replace(/(<([^>]+)>)/ig, '')
        }

        function search(q) {
            return brain.search(country, q)
        }

        if (query === "" || query ===  null || query === undefined) {
            return "Not A Valid Question"
        } else {
            const res = await search(query)
            console.log(JSON.stringify(res))
            fs.writeFile("brainly.test.json", JSON.stringify(res), 'utf-8', (err) => {
                if (err) {
                    console.log('An error occured')
                    return console.log(err)
                }
                console.log("JSON file has been saved")
            })
        }
    } catch (err) {
        console.error(err)
    }
}

search('A rectangular box is 5 cm long . 3 cm wide and 4 cm high . find its surface area . ')
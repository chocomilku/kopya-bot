const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")
const country = 'ph'

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
            console.log(res)
        }
    } catch (err) {
        console.error(err)
    }
}

search('Algebra')
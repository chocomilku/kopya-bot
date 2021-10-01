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
            for (let i = 0; i < res.length; i++) {
                let q = `${i}. Question: ${res[i].question.content}`
                for (let x = 0; x < res[i].answers.length; x++) {
                    let a = `${i}. Answer: ${res[i].answers[x].content}`
                }
                console.log(`${removeTags(q)}\n${removeTags(a)}\n`)
            }
        }
    } catch (err) {
        console.error(err)
    }
}

search('Algebra')
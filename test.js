const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")

const start = async function(question) {
    try {
        function removeTags(str) {
            if ((str === null) || (str === "")) return false
            else str = str.toString()
            return str.replace(/(<([^>]+)>)/ig, '')
        }
    
        function find(query) {
            return brain.search('ph', query)
        }
    
        if (question === "" || question ===  null || question === undefined) {
            return console.log("Not valid question")
        } else {
            const res = await find(question)
            for (let i = 0; i < res.length; i++) {
                let q = `${i}. Question: ${res[i].question.content}`
                let a = `${i}. Answer: ${res[i].answers[0].content}`
    
                console.log(`${removeTags(q)}\n${removeTags(a)}\n`)
            }
        }
        function removeTags(str) {
            if ((str === null) || (str === "")) return false
            else str = str.toString()
            return str.replace(/(<([^>]+)>)/ig, '')
        }
    
        function find(query) {
            return brain.search('ph', query)
        }
    
        if (question === "" || question ===  null || question === undefined) {
            return console.log("Not valid question")
        } else {
            const res = await find(question)
            for (let i = 0; i < res.length; i++) {
                let q = `${i}. Question: ${res[i].question.content}`
                let a = `${i}. Answer: ${res[i].answers[0].content}`
    
                console.log(`${removeTags(q)}\n${removeTags(a)}\n`)
            }
        }
    } catch (err) {
        console.error(err)
    }
}

function find(query) {
    return brain.search('ph', query)
}

console.log(find('trigonometry'))
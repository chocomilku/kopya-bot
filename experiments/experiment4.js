const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")
const country = 'ph'
const {toMarkdown} = require('../toMarkdown')

const search = async function(query) {
    try {
        function removeTags(str) {
            if ((str === null) || (str === "")) return false
            else str = str.toString()
            return str.replace(/(<([^>]+)>)/ig, '')
        }

        function tM(str) {
            return toMarkdown(str)
        }

        function search(q) {
            return brain.search(country, q)
        }

        if (query === "" || query === null || query.match(/^ *$/)) {
            return await Promise.reject(new Error("Not A Valid Question!"));
        } else {
            const res = await search(query)
            console.log(res.length)
            let data = {"question": tM(res[0].question.content), "questionAuthor": res[0].question.author.username, "subject": res[0].question.education, "grade": res[0].question.grade, "link": `https://brainly.ph/question/${res[0].question.id}`, "answerFormatted": removeTags(res[0].answers[0].content.toString()),"answer": tM(res[0].answers[0].content.toString()) , "answerAuthorId": res[0].answers[0].author.id.toString(), "lastActivity": res[0].question.lastActivity}
            console.log(data)
            return data
        }
    } catch (error) {
        throw new Error(error)
    }
}

search('A rectangular box is 5 cm long, 3 cm wide and 4 cm high. Find its surface area.')
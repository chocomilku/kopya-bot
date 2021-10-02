const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")
const country = 'ph'

module.exports = {
    search: async function(query) {
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
                return 'Error'
            } else {
                const res = await search(query)
                let data = {"question": res[0].question.content, "questionAuthor": res[0].question.author.username, "subject": res[0].question.education, "grade": res[0].question.grade, "link": `https://brainly.ph/question/${res[0].question.id}`, "answerFormatted": removeTags(res[0].answers[0].content), "answerAuthorId": res[0].answers[0].author.id, "lastActivity": res[0].question.lastActivity}
                return data
            }
        } catch (err) {
            console.error(err)
        }
    }
}


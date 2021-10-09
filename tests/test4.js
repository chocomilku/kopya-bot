const Brainly = require("brainly-scraper-v2")
const brain = new Brainly("ph")
const country = 'ph'


const search = async function(query) {
    try {
        function removeTags(str) {
            if ((str === null) || (str === "")) return false
            else str = str.toString()
            return str.replace(/(<([^>]+)>)/ig, '')
        }

        function search(q) {
            return brain.search(country, q)
        }

        if (query === "" || query === null || query.match(/^ *$/)) {
            return await Promise.reject(new Error("Not A Valid Question!"));
        } else {
            const res = await search(query)
            if (res[0] == null || res[0] == undefined) {
                return await Promise.reject(new Error("No Results."));
            } else {
                console.log(res.length)
                let data = {"question": res[0].question.content, "questionAuthor": res[0].question.author.username, "subject": res[0].question.education, "grade": res[0].question.grade, "link": `https://brainly.ph/question/${res[0].question.id}`, "answerFormatted": removeTags(res[0].answers[0].content.toString()), "answerAuthorId": res[0].answers[0].author.id.toString(), "lastActivity": res[0].question.lastActivity}
                return data
            }
        }
    } catch (err) {
        return await Promise.reject(new Error(err));
    }
}

search('china')

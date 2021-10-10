const country = 'ph'
const Brainly = require('brainly-scraper-v2')
const brain = new Brainly(country)
const { toMarkdown } = require('./toMarkdown')

async function BrainlySearch(query, len = 10) {
    try {
        const convert = (str) => {return toMarkdown(str)}
        const search = (str, length = 10) => {return brain.search(country, str, length)}

         if (query === "" || query === null || query.match(/^ *$/)) {
            throw new Error('Not A Valid Question!')
         } else {
            function fill(index, question, answer, questionAuthor, questionAuthorId, questionId, subject, grade, answerAuthorId, lastAct, closed) {
                return {'index': index, 
                'question': question, 
                'answer': answer, 
                'questionAuthor': questionAuthor, 
                'questionAuthorId': questionAuthorId, 
                'questionId': questionId, 
                'subject': subject, 
                'grade': grade, 
                'answerAuthorId': answerAuthorId, 
                'lastActivity': lastAct, 
                'closed': closed}
            }
            const res = await search(query, len)
            let data = []
            for (let index = 0; index < res.length; index++) {
                const i = res[index]
                console.log(index)
                data.push(index)
                const q = i.question
                const a = i.answers[0]
                let append = fill(i, q.content, a.content, q.author.username, q.author.id, q.id, q.education, q.grade, a.author.id, q.lastActivity, q.closed)
                data.push(append)
            }
            console.log(data)
         }
    } catch (error) {
        const c = new Error(error)
        c.name = 'scriptError'
        console.error(c)
        // throw c
    }
}

BrainlySearch('rizal', 10)
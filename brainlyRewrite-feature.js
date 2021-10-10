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
            const res = await search(query, len)
            let data = []
            function fill(index) {
                const n = res[index]
                const q = n.question
                const a = n.answers[0]
                return {
                'index': index, 
                'question': q.content, 
                'answer': a.content, 
                'questionAuthor': q.author.username, 
                'questionAuthorId': q.author.id, 
                'questionId': q.id, 
                'subject': q.education, 
                'grade': q.grade, 
                'answerAuthorId': a.author.id, 
                'lastActivity': q.lastActivity, 
                'closed': q.closed
                }
            }
            for (let i = 0; i < res.length; i++) {
                console.log(i)
                let append = fill(i)
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
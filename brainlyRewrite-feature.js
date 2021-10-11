const country = 'ph'
const Brainly = require('brainly-scraper-v2')
const brain = new Brainly(country)
const { toMarkdown } = require('./toMarkdown')

module.exports = {
     BrainlySearch: async (query, len = 10) => {
        try {
            const convert = (str) => {return toMarkdown(str)}
            const search = (str, length = 10) => {return brain.search(country, str, length)}     
            function fill(index) {
                const n = res[index]
                const q = n.question
                const a = n.answers

                function allAnswers() {
                    let re = []
                    for (let i = 0; i < a.length; i++) {
                        const answers = {
                            'index': i,
                            'answer': convert(a[i].content),
                            'answerAuthorId': a[i].author.id.toString()
                        }
                        re.push(answers)
                    }
                    return re
                }
    
                const toReturn = {
                    'index': index, 
                    'question': convert(q.content), 
                    'questionAuthor': q.author.username, 
                    'questionAuthorId': q.author.id.toString(), 
                    'questionId': q.id.toString(), 
                    'subject': q.education, 
                    'grade': q.grade, 
                    'lastActivity': q.lastActivity, 
                    'closed': q.closed,
                    'answers': allAnswers()
                }
                return toReturn
            }
            const res = await search(query, len)
            let data = []
            for (let i = 0; i < res.length; i++) {
                let append = fill(i)
                data.push(append)
            }
            return data
        } catch (error) {
            const c = new Error(error)
            c.name = 'scriptError'
            throw c
        }
    }
}
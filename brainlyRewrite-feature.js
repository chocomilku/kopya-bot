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
                const a = n.answers

                function allAnswers() {
                    let re = []
                    for (let i = 0; i < a.length; i++) {
                        const answers = {
                            'index': i,
                            'answer': a[i].content,
                            'answerAuthorId': a[i].author.id
                        }
                        re.push(answers)
                    }
                    return re
                }

                const toReturn = {
                    'index': index, 
                    'question': q.content, 
                    'questionAuthor': q.author.username, 
                    'questionAuthorId': q.author.id, 
                    'questionId': q.id, 
                    'subject': q.education, 
                    'grade': q.grade, 
                    'lastActivity': q.lastActivity, 
                    'closed': q.closed,
                    'answers': allAnswers()
                }
                return toReturn
            }
            for (let i = 0; i < res.length; i++) {
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
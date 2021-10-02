const { search } = require('../brainly')

const find = async (q) => {
    return search(q)
}

const use = async (query) => {
    const res = await find(query)
    console.log(`Question: ${res.question}\nQuestion By: ${res.questionAuthor}\nSubject: ${res.subject}\nGrade: ${res.grade}\nLink: ${res.link}\nAnswer: ${res.answerFormatted}\n Answer Author ID: ${res.answerAuthorId}\nLast Activity: ${res.lastActivity}`)
}

use('algae')
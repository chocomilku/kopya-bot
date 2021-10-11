const { search } = require('../brainly')

const find = async (q) => {
    return search(q)
}

const use = async (query) => {
    
    const res = await find(query)
    try {
        console.log(`Question: ${res.question}\nQuestion By: ${res.questionAuthor}\nSubject: ${res.subject}\nGrade: ${res.grade}\nLink: ${res.link}\nAnswer: ${res.answerFormatted}\nAnswer Author ID: ${res.answerAuthorId}\nLast Activity: ${res.lastActivity}`)
        let b = 0;
        for (const a of Object.values(res)) {
            b += a.length;
            console.log(b)
        }
    } catch (err) {
        console.error(err)
    }
   
}

use('china')
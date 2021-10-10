const country = 'ph'
const Brainly = require('brainly-scraper-v2')
const brain = new Brainly(country)
const { toMarkdown } = require('./toMarkdown')

async function BrainlySearch(query, len) {
    try {
        const convert = (str) => {return toMarkdown(str)}
        const search = (str, length = 10) => {return brain.search(country, str, length)}

         if (query === "" || query === null || query.match(/^ *$/)) {
            throw new Error('Not A Valid Question!')
         } else {
            const res = await search(query, len)
            console.log(res.length)
         }
    } catch (error) {
        const c = new Error(error)
        c.name = 'scriptError'
        console.error(c)
        // throw c
    }
}

BrainlySearch('rizal')
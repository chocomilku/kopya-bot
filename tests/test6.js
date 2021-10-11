// testing brainlyRewrite-feature.js if null content will returned with text or error

// const { BrainlySearch } = require('../brainlyRewrite-feature')

// const search = async (q) => {
//     const res = await BrainlySearch(q)
//     console.log(res)
// }

// search('Think of three scenes from your favorite movies where different communicative strategies were employed in one conversation')

const Brainly = require('brainly-scraper-v2')
const brain = new Brainly('ph')

console.log(brain.search('ph', 'Think of three scenes from your favorite movies where different communicative strategies were employed in one conversation'))
const { search } = require('../brainly')

let data = search('math')

const e = async () => {
    const a = await data
    console.log(a)
}

e()
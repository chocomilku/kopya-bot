const { search } = require('../brainly')

let data = search('math')
let ans;

const e = async () => {
    const a = await data
    ans = a
}

e()

console.log(ans)
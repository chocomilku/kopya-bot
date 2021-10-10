const { BrainlySearch } = require('./brainlyRewrite-feature')

const repackage = async (query, length = 10) => {
    const res = await BrainlySearch(query, length)
    let eachTotalLength = []
    for (let i = 0; i < res.length; i++) {
        let totalLength = 0
        for (const el of Object.values(res[i])) {
            totalLength += el.length
        }
        let count = {'index': i, 'length': totalLength}
        eachTotalLength.push(count)
    }
    console.log(eachTotalLength)
}

repackage('how much is a dollar', 10)
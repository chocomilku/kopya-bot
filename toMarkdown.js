const TurndownService = require('turndown')
const td = new TurndownService()

module.exports = {
    toMarkdown: function(string) {
        return td.turndown(string)
    }
}
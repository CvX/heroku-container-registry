var pkg = require('./package.json')

module.exports = {
  topic: {
    description: 'Use containers to build and deploy Heroku apps',
    name: 'container'
  },
  commands: [
    require('./commands/index')(pkg),
    require('./commands/login')(pkg.topic),
    require('./commands/logout')(pkg.topic),
    require('./commands/push')(pkg.topic)
  ]
}

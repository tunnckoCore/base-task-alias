/*!
 * base-task-alias <https://github.com/tunnckoCore/base-task-alias>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isValid = require('is-valid-app')

function arraify (val) {
  if (!val) return []
  if (!Array.isArray(val)) return [val]
  return val
}

module.exports = function baseTaskAlias () {
  return function plugin (app) {
    if (!isValid(app, 'base-task-alias')) return

    app.use(require('base-task')())
    app.define('taskAlias', function taskAlias (name, aliases) {
      arraify(aliases).forEach(function (alias) {
        app.task(alias, [name])
      })
    })
  }
}

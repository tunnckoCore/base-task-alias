/*!
 * base-task-alias <https://github.com/tunnckoCore/base-task-alias>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isValid = require('is-valid-app')
var extend = require('extend-shallow')

function arraify (val) {
  if (!val) return []
  if (!Array.isArray(val)) return [val]
  return val
}

/**
 * > Adds `.taskAlias` method that accept
 * `name` and `aliases`. It creates task using
 * the `.task` method for each item in `aliases`
 * array, which task will point to `name` task.
 *
 * **Example**
 *
 * ```js
 * var tasks = require('base-task')
 * var taskAlias = require('base-task-alias')
 * var Base = require('base')
 * var app = new Base()
 *
 * app.use(tasks()).use(taskAlias())
 * ```
 *
 * @param  {Object} `options` object to merge with `app.options`
 * @return {Function} plugin executed by `.use` method
 * @api public
 */

module.exports = function baseTaskAlias (options) {
  return function plugin (app) {
    if (!isValid(app, 'base-task-alias')) return

    app.options = extend({}, app.options, options)
    app.use(require('base-task')())

    /**
     * > Creates task for each item in `aliases`
     * pointing to `name` as dependency.
     *
     * **Example**
     *
     * ```js
     * app.use(taskAlias())
     *
     * app.taskAlias('foo', ['bar', 'qux'])
     * app.task('foo', function () {
     *   console.log('task: foo')
     * })
     *
     * app.build('foo') // => 'task: foo'
     * app.build('bar') // => 'task: foo'
     * app.build('qux') // => 'task: foo'
     * ```
     *
     * @name   `.taskAlias`
     * @param  {String} `name` task name to which each alias will point
     * @param  {Array|String} `aliases` list of alias task names
     * @return {Object} return `this` instance for chaining
     * @api public
     */

    app.define('taskAlias', function taskAlias (name, opts, aliases) {
      var isOk = Array.isArray(opts)
      aliases = isOk ? opts : aliases
      opts = !isOk && typeof opts === 'object' ? opts : {}

      arraify(aliases).forEach(function (alias) {
        app.task(alias, opts, [name])
      })
      return this
    })
  }
}

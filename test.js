/*!
 * base-task-alias <https://github.com/tunnckoCore/base-task-alias>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('mukla')
var plugin = require('./index')
var Base = require('base')

test('should create 2 alias tasks for `name`', function (done) {
  var app = new Base({ isApp: true })
  app.use(plugin())
  app.taskAlias('foo', ['bar', 'qux'])
  app.task('foo', function fooTask () {})
  test.ok(app.tasks)
  test.strictEqual(Object.keys(app.tasks).length, 3)
  done()
})

test('should be able to run aliases', function (done) {
  var app = new Base({ isApp: true })
  var count = 0

  app.use(plugin())
  app.taskAlias('aaa', ['bbb', 'ccc'])
  app.task('aaa', function aaaTask () {
    count++
  })

  app.build('aaa', function () {})
  app.build('aaa', function () {})
  app.build('bbb', function () {})
  app.build('bbb', function () {})
  app.build('ccc', function () {})
  app.build('ccc', function () {})
  test.strictEqual(count, 6)
  done()
})

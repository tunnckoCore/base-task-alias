# [base-task-alias][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Plugin that adds `.taskAlias` method to your @node-base application. Creating alias task for some task.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i base-task-alias --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const baseTaskAlias = require('base-task-alias')
```

### [baseTaskAlias](index.js#L41)
> Adds `.taskAlias` method that accept `name` and `aliases`. It creates task using the `.task` method for each item in `aliases` array, which task will point to `name` task.

**Params**

* `options` **{Object}**: object to merge with `app.options`    
* `returns` **{Function}**: plugin executed by `.use` method  

**Example**

```js
var tasks = require('base-task')
var taskAlias = require('base-task-alias')
var Base = require('base')
var app = new Base()

app.use(tasks()).use(taskAlias())
```

### [.taskAlias](index.js#L75)
> Creates task for each item in `aliases` pointing to `name` as dependency.

**Params**

* `name` **{String}**: task name to which each alias will point    
* `opts` **{Object|Array}**: options passed to `.task` or array of `aliases`    
* `aliases` **{Array|String}**: list of alias task names    
* `returns` **{Object}**: return `this` instance for chaining  

**Example**

```js
app.use(taskAlias())

app.taskAlias('foo', ['bar', 'qux'])
app.task('foo', function () {
  console.log('task: foo')
})

app.build('foo') // => 'task: foo'
app.build('bar') // => 'task: foo'
app.build('qux') // => 'task: foo'
```

## Related
- [base-plugins-enhanced](https://www.npmjs.com/package/base-plugins-enhanced): Error handling and extras for `.use` and `.run` methods of your Base… [more](https://github.com/tunnckocore/base-plugins-enhanced#readme) | [homepage](https://github.com/tunnckocore/base-plugins-enhanced#readme "Error handling and extras for `.use` and `.run` methods of your Base apps. Modifies `.use` method to be able to 1) accept array of functions, 2) options object as second argument. Emits `error` event if some plugin fails.")
- [base-plugins](https://www.npmjs.com/package/base-plugins): Upgrade's plugin support in base applications to allow plugins to be called… [more](https://github.com/node-base/base-plugins) | [homepage](https://github.com/node-base/base-plugins "Upgrade's plugin support in base applications to allow plugins to be called any time after init.")
- [base-task](https://www.npmjs.com/package/base-task): base plugin that provides a very thin wrapper around <https://github.com/doowb/composer> for adding… [more](https://github.com/node-base/base-task) | [homepage](https://github.com/node-base/base-task "base plugin that provides a very thin wrapper around <https://github.com/doowb/composer> for adding task methods to your application.")
- [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable… [more](https://github.com/node-base/base) | [homepage](https://github.com/node-base/base "base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
- [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
- [verb-generate-readme](https://www.npmjs.com/package/verb-generate-readme): Generate your project's readme with verb. Requires verb v0.9.0 or higher. | [homepage](https://github.com/verbose/verb-generate-readme "Generate your project's readme with verb. Requires verb v0.9.0 or higher.")
- [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/base-task-alias/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/base-task-alias
[npmjs-img]: https://img.shields.io/npm/v/base-task-alias.svg?label=base-task-alias

[license-url]: https://github.com/tunnckoCore/base-task-alias/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/base-task-alias.svg

[downloads-url]: https://www.npmjs.com/package/base-task-alias
[downloads-img]: https://img.shields.io/npm/dm/base-task-alias.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/base-task-alias
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/base-task-alias.svg

[travis-url]: https://travis-ci.org/tunnckoCore/base-task-alias
[travis-img]: https://img.shields.io/travis/tunnckoCore/base-task-alias/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/base-task-alias
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/base-task-alias.svg

[david-url]: https://david-dm.org/tunnckoCore/base-task-alias
[david-img]: https://img.shields.io/david/tunnckoCore/base-task-alias.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg


# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://gitlab.rtd.systems/dh3/npm-packages/npm-modules/compare/angular-example-app@1.0.1...angular-example-app@2.0.0) (2020-03-30)


### chore

* Update to Angular 9 ([0b67205](https://gitlab.rtd.systems/dh3/npm-packages/npm-modules/commit/0b67205e48aae8a496f85f1bdff945e29c375bf0))


### BREAKING CHANGES

* Run ngcc after installing.
This helps resolve issues with ngc in monorepos such as lerna.





## 1.0.1 (2020-03-25)

**Note:** Version bump only for package angular-example-app





# 1.0.0 (2018-12-31)


* BREAKING CHANGE: Angular 6 Update ([93f9ad9](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/93f9ad9))
* BREAKING CHANGE : Webpack Refactor ([c102cd5](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/c102cd5))
* BREAKING CHANGE : Revert changes to devmod decorator configuration ([be80b44](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/be80b44))
* Add new way of configuring noop in production supporting mgchev seed ([35b79c4](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/35b79c4))


### Bug Fixes

* add modelApiService in providers ([e52aab5](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/e52aab5))


### Features

* (devmod-core) Add DeveloperModule decorator for arbitrary developer modules ([8a65bb4](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/8a65bb4))
* (devmod) Add support for DeveloperFunction decorators on service methods ([7aadc1b](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/7aadc1b))
* Add column configuration inputs to loopback data table [#56](https://gitlab.nextfaze.com/nextfaze/npm-modules/issues/56) ([9e1e0af](https://gitlab.nextfaze.com/nextfaze/npm-modules/commit/9e1e0af))


### BREAKING CHANGES

* Updates to Angular 6 across all angular packages
Removes devmod packages as it is now a public package on github
* Replace ng-packagr with webpack across angular modules
* The previous way wasn't working as intended anyway
(was false positive). After pulling my hair out over how to do this
I finally concluded that there's no reasonable way to do this at a
decorator level. However, since the values you actually want to
be 100% sure are shaken out are things like passwords, it's easier
to just do the work for shaking those at a per-decorator level as
demonstrated in the updated test.
* decorators have been renamed to avoid annoying auto
import conflicts from vscode

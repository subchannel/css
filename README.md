# CSS

A _hopefully_ sane CSS code styleguide for [Subchannel](https://subchannel.io) projects. To maintain conformance we created a shareable [stylelint](http://stylelint.io) configuration package which is included in this repository.

![](assets/sass-logo.png)
![](assets/stylelint-logo.png)

## Installation and Usage

First install stylelint and the Subchannel configuration and save them to your project’s `devDependencies` using [npm](https://npmjs.com). _You may choose to install them globally but that is up to you._

```
$ npm install --save-dev stylelint stylelint-config-subchannel
```

Create or modify your project’s `.stylelintrc` file to extend from the Subchannel configuration.

```json
{
  "extends": "stylelint-config-subchannel"
}
```

Now when you run `stylelint` it will use the Subchannel configuration.

_More detailed and thorough guides for installing and integrating stylelint with developer tools like [Atom](https://atom.io) and [Sublime Text](https://www.sublimetext.com) can be found on their website, [http://stylelint.io](http://stylelint.io)._

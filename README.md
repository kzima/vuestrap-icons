Vuestrap Icons Component
=========

Vuestrap Icons Component complements [vuestrap web components](http://kzima.github.io/vuestrap-base-components/#/) with svg icons.
SVG sprite consists of 223 icons from Iconic — www.useiconic.com/open plus two custom ones: circle-fill and circle-outline

DEMO
=========

[Documentation](http://kzima.github.io/vuestrap-icons/#/icons)

QUICK USE
=========

For compiled components, use it within your Vue instance like this:

```js
new Vue({
	el: '#app',
	components: { 'icon': vuestrapIcons.icons }
})
```

-- OR --

If you chosen to work with source components, just import* desired component like so:

```js
import icons from 'vuestrap-icons/src/components/icons'
```

and then load it in your Vue instance:

```js
new Vue({
	el: '#app',
	components: { 'icon': icons }
})
```

*Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

You can then use icon component in your html, like so:
```html
<icon name="cog"></icon>
```

TODO
=========
- create html page with list of icons
- testing

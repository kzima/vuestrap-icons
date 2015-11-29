Vuestrap Icons Component
=========

Vuestrap Icons Component is complements Bootstrap 4 with svg icons.
SVG sprite consists of 223 icons from Iconic — www.useiconic.com/open plus two custom ones: circle-fill and circle-outline

DEMO
=========

[Documentation](http://http://kzima.github.io/vuestrap-icons/#/icons)

QUICK USE
=========

For compiled components, use it within your Vue instance like this:
<code>new Vue({ components: { 'icon': vuestrapIcons.icons }})</code>

-- OR --

If you chosen to work with source components, just import* desired component like so:

<code>import icons from 'vuestrap-icons/src/components/icons'</code>

and then load it in your Vue instance:

<code>new Vue({ components: { 'icon': icons }})</code>

*Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

TODO
=========
- create an html page with a list of icons
- testing

// import dependencies
import './icons.scss'
import template from './icons.html'
// enable support for svg in all browsers
import './svg4everybody.js'

// export component object
export default {
  template: template,
    replace: true,
    computed: {
      iconsSize() {
        return !this.size ? `icons-sm` : `icons-${this.size}`
      },
      iconsAlign() {
        return !this.align ? `` : `icons-${this.align}`
      },
      iconsVariant() {
        return !this.variant ? `` : `icons-${this.variant}`
      },
      iconsBackground() {
        let bg = this.background.split('-')
        bg = (bg[1]) ? bg[1] : 'fill'
        return !this.background ? `` : `icons-bg-${bg}`
      },
    },
    props: {
      name: {
        type: String
      },
      background: {
        type: String,
        default: '',
      },
      align: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'sm'
      },
      text: {
        type: String,
        default: ''
      },
      variant: {
        type: String,
        default: 'standard'
      },
      path: {
        type: String,
        default() {
          if (process.env.NODE_ENV === 'production') {
            return 'bower_components/vuestrap-icons/assets/icons.min.svg'
          }
          return 'node_modules/vuestrap-icons/assets/icons.min.svg'
        }
      }
    }
}

import bus from "@/utils/bus"
import validators from "@/utils/validators"

const contexts = [require.context("@/elements/", true, /\.vue$/), require.context("@/patterns/", true, /\.vue$/)]
const components = {}
contexts.forEach(context => {
  context.keys().forEach(key => {
    let c = context(key).default
    components[c.name] = c
  })
})

export default {
  install(Vue, options) {
    let i18n = (options && options.i18n) || (key => key)
    validators.setI18n(i18n)
    Vue.prototype.$i18n = i18n
    Object.values(components).forEach(c => Vue.component(c.name, c))
    // Vue.mixin(mixins)
  }
}

export {
  components,
  bus,
  validators
}

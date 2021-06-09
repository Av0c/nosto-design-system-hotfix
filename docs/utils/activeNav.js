/**
 * This is Vue Design System’s helper util that
 * highlights the currently active nav item.
 */

export default {
  methods: {
    clearActiveLinks() {
      const activeLinks = document.querySelectorAll(".vueds-active")
      if (activeLinks) {
        activeLinks.forEach(function(element) {
          element.classList.remove("vueds-active")
        })
      }
    },
    init() {
      let currentURL = ""
      const sidebar = document.querySelector("div[class^='rsg--sidebar']")

      if (process && process.env && process.env.NODE_ENV === "test") {
        currentURL = "/example/"
      } else {
        currentURL = window.location.pathname + window.location.hash.split("?")[0].replace(/%20/g, " ")
      }

      if (sidebar) {
        const navLinks = sidebar.querySelectorAll("nav > ul > li > a")
        const subNavLinks = sidebar.querySelectorAll("nav > ul > li ul a")
        const currentPage = sidebar.querySelector("a[href='" + currentURL + "']")
        const search = sidebar.querySelector("div[class^='rsg--search'] input")
        const self = this

        let parentNav

        if (currentURL && currentPage) {
          currentPage.parentNode.classList.add("vueds-active")
        }

        if (search && !search.classList.contains("set")) {
          search.setAttribute("placeholder", "Type to filter")
        }

        if (navLinks) {
          navLinks.forEach(function(element) {
            element.addEventListener("click", function() {
              let isCurrentSubNav = window.location.href.indexOf(element.href) > -1

              if (!isCurrentSubNav) {
                self.clearActiveLinks()
              }

              self.parentNav = element.href

              setTimeout(() => {
                this.parentNode.classList.add("vueds-active")
              }, 0)
            })
          })
        }

        if (subNavLinks) {
          subNavLinks.forEach(function(element) {
            element.addEventListener("click", function() {
              let isCurrentSubNav = window.location.href.indexOf(self.parentNav) > -1

              if (!isCurrentSubNav) {
                self.clearActiveLinks()
              }

              setTimeout(() => {
                this.parentNode.parentNode.parentNode.classList.add("vueds-active")
              }, 0)
            })
          })
        }
      }
    }
  },
  mounted() {
    this.init()
  }
}

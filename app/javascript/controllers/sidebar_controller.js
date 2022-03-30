import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sidebar"
export default class extends Controller {
  static targets = [ "sidebarContainer", "icon", "link" ]

  connect() {
  }

  toggle() {
    if (this.sidebarContainerTarget.dataset.expanded === "1") {
      this.collapse()
    } else {
      this.expand()
    }
  }

  collapse() {
    this.sidebarContainerTarget.classList.remove("sm:w-1/5")
    this.sidebarContainerTarget.classList.add("sm:w-12")
    this.iconTarget.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
    `
    this.linkTargets.forEach(link => {
      link.classList.add("sr-only")
    })
    this.sidebarContainerTarget.dataset.expanded = "0"
  }

  expand() {
    this.sidebarContainerTarget.classList.remove("sm:w-12")
    this.sidebarContainerTarget.classList.add("sm:w-1/5")
    this.iconTarget.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
    `
    this.linkTargets.forEach(link => {
      link.classList.remove("sr-only")
    })
    this.sidebarContainerTarget.dataset.expanded = "1"
  }
}

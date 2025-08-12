document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for all navigation links (including hero buttons)
  const allNavLinks = document.querySelectorAll('a[href^="#"]')

  allNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()

      const href = this.getAttribute("href")
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const navbarHeight = 80
        const elementPosition = targetElement.offsetTop
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")

    if (window.pageYOffset > 100) {
      navbar.style.background = "rgba(15, 23, 42, 0.95)"
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.9)"
    }
  })

  // Video placeholder handlers - embed YouTube iframe on click
  const videos = document.querySelectorAll(".video-placeholder")
  videos.forEach((video) => {
    video.addEventListener("click", () => {
      const videoId = video.dataset.videoId
      if (!videoId) {
        return
      }

      // Create iframe element for the video
      const iframe = document.createElement("iframe")
      iframe.width = "560"
      iframe.height = "315"
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
      iframe.title = "YouTube video player"
      iframe.frameBorder = "0"
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      iframe.allowFullscreen = true

      // Clear placeholder and insert iframe
      video.innerHTML = ""
      video.appendChild(iframe)
    })
  })

  // Discord button handler (if any)

  console.log("Portfolio loaded successfully!")
})

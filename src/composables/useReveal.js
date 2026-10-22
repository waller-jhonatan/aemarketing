import { onBeforeUnmount, onMounted } from 'vue'

// Reveals `.rv` elements once they enter the viewport. Elements already
// scrolled past are revealed too, so fast scrolls and anchor jumps never
// leave content hidden.
export function useReveal() {
  let ticking = false
  let timer

  function done(ev) {
    const el = ev.currentTarget
    if (ev.target !== el) return
    el.classList.add('is-done')
    el.removeEventListener('animationend', done)
  }

  function check() {
    ticking = false
    const vh = window.innerHeight
    let k = 0
    document.querySelectorAll('.ae .rv:not(.is-in)').forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.style.setProperty('--d', `${k++ * 0.1}s`)
        el.classList.add('is-in')
        el.addEventListener('animationend', done)
      }
    })
  }

  function request() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(check)
  }

  onMounted(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.documentElement.classList.add('rv-on')
    addEventListener('scroll', request, { passive: true, capture: true })
    addEventListener('resize', request)
    timer = setInterval(check, 600)
    request()
  })

  onBeforeUnmount(() => {
    removeEventListener('scroll', request, { capture: true })
    removeEventListener('resize', request)
    clearInterval(timer)
  })

  return { refresh: request }
}

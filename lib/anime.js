import anime from 'animejs'

export function alterHeroImageBox(element, width) {
  anime({
    targets: element,
    width,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 500
  })
}

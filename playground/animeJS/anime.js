const boxesAnimation = window.anime({
  targets: ".js-box",
  translateY: [150, 50],
  backgroundColor: (el, i, t) => {
    const r = 225 - i * ((225 - 196) / 12);
    const g = 209 - i * ((209 - 72) / 12);
    const b = 44 + i * ((140 - 44) / 12);
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
  },
  duration: 900,
  easing: "easeOutElastic",
  elasticity: 500,
  delay: (el, i, t) => i * 20,
  loop: true,
  direction: "alternate",
});

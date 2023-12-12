export const fadeIn = (diretioon , deLay) => {
  return {
    hidden:{
        y: diretioon === "up" ? 40 : diretioon === " down" ? -40 : 0,
        x: diretioon === "laft" ? 40 : diretioon === "rigth" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: deLay,
        ease: [0.25 , 0.25, 0.25, 0.75],
      }
    }
  }
}
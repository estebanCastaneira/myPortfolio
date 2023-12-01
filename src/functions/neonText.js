export default function neonText(color) {
  return {
    color: "#fff",
    textShadow: `0 0 7px #fff, 0 0 10px #fff, 0 0 21px ${color}, 0 0 42px ${color}, 0 0 82px ${color}, 0 0 92px ${color}, 0 0 102px ${color}, 0 0 151px ${color}`,
  }
}

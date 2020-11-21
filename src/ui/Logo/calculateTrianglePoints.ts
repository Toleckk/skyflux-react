export const calculateTrianglePoints = (size = 0, x = 0, y = 0): string => {
  const l = size - x - x

  const first = {x, y}
  const second = {x: x + l, y}
  const third = {x: x + l / 2, y: y + (Math.sqrt(3) / 2) * l}

  return `${first.x},${first.y} ${second.x},${second.y} ${third.x},${third.y}`
}

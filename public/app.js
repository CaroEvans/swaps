const leftEl = document.getElementById('left')
const rightEl = document.getElementById('right')
const nextBtn = document.getElementById('next')

let index = 0
let spinTimeout

function render() {
  const swap = swapData[index]
  leftEl.textContent = swap.left
  rightEl.textContent = swap.right
}

function handleClick() {
  index = swapData[index + 1] ? index + 1 : 0
  render()

  nextBtn.classList.add('spinning')
  clearTimeout(spinTimeout)
  spinTimeout = setTimeout(() => nextBtn.classList.remove('spinning'), 500)
}

nextBtn.addEventListener('click', handleClick)
render()

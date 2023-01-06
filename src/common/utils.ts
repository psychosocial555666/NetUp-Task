export const dragXHandler = (target: HTMLUListElement | null, delta: number, modificator: number) => {
  if (target) {
    const elemWidth =
      target.childNodes[0] instanceof HTMLElement ? target.childNodes[0].offsetWidth + 16 : 0;
    const elemNumber = target.childNodes.length;
    const MIN = -(elemWidth * elemNumber) - 112 + target.offsetWidth;
    const MAX = 0;
    const left = target.offsetLeft;
    let newLeft = left - delta*modificator;
    if (newLeft < MIN) newLeft = MIN;
    if (newLeft > MAX) newLeft = MAX;
    target.style.left = `${newLeft}px`;
  }
} 

export const randomInteger = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
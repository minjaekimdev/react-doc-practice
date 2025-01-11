export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // 리액트가 최종 state를 계산하는 데 사용하는 알고리즘즘
  queue.forEach(item => {
    if (typeof item === 'function') {
      finalState = item(finalState);
    } else {
      finalState = item;
    }
  })

  return finalState;
}

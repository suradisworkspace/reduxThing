import {fork, take, cancel} from 'redux-saga/effects';

const takeAPI = (pattern, saga, cancelT, ...args) => fork(function*() {
  while (true) {
    const action = yield take(pattern)
    const task = yield fork(saga, ...args.concat(action))
    yield take(cancelT)
    yield cancel(task)
  }
})

export default takeAPI

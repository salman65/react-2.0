import { fork } from 'redux-saga/effects';
import homeWatcher from './sagas/home.saga';

// Here, we register our watcher saga(s) and export as a single generator
// function (rootSaga) as our root Saga.
export default function* rootSaga() {
  // yield fork(homeWatcher);
}

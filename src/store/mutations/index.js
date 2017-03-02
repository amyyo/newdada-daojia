import * as MutationTypes from '../mutation-types'

export default {
  [MutationTypes.INCREMENT] (state) {
    state.count++
  },
  [MutationTypes.DECREMENT] (state) {
    state.count--
  },
  [MutationTypes.RESET] (state) {
    state.count = 0
  },
  [MutationTypes.SEARCH_BOOK_QUERY] (state, content) {
    state.books = content
  },
  [MutationTypes.PLUS] (state) {
    state.number++
  },
  [MutationTypes.MINUS] (state) {
    state.number--
  }
}

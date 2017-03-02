
import * as MutationTypes from '../mutation-types'
import Vue from 'vue'

// 状态事件传参数
export const randomTitle = ({ commit }, params) => commit('randomTitle', params)

export const loading = ({ commit }, payload) => commit('loading', payload)

// reset
export const reset = ({ commit }) => commit(MutationTypes.RESET)

// count
export const increment = ({ commit }) => commit(MutationTypes.INCREMENT)
export const decrement = ({ commit }) => commit(MutationTypes.DECREMENT)

// search
export const searchBook = ({ commit }, query) => {
  return Vue.http.get(`${MutationTypes.SEARCHURL}?q=${query}`)
    .then((result) => {
      commit(MutationTypes.SEARCH_BOOK_QUERY, result.books)
    }, (error) => {
      console.log(error)
    })
}

// square
export const plus = ({ commit }) => commit(MutationTypes.PLUS)
export const minus = ({ commit }) => commit(MutationTypes.MINUS)


import * as MutationTypes from '@/mutation-type'

// 状态事件传参数
export const randomTitle = ({ commit }, params) => commit('randomTitle', params)

export const loading = ({ commit }, payload) => commit('loading', payload)

// reset
export const reset = ({ commit }) => commit(MutationTypes.RESET)
export const increment = ({ commit }) => commit(MutationTypes.INCREMENT)
export const decrement = ({ commit }) => commit(MutationTypes.DECREMENT)

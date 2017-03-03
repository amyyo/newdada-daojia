<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">
                <icon name="chevron-left" size="lg" left />
                返回
            </router-link>
            <h5 slot="body">Counter</h5>
        </navbar>
        <flex-item>
            <counter
                :count="count"
                :doubleCount="doubleCount"
                :increment="increment"
                :decrement="decrement"
                :reset="reset" />
        </flex-item>
    </flex>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import Counter from '../components/Counter'
  export default {
    components: {
      Counter
    },
    computed: {
      ...mapState({ // 获取store状态
        count: state => state.count
      }),
      ...mapGetters(['doubleCount']) // 另一种方式获取状态（经过二次处理）
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'reset']) // 触发状态事件
    }
  }
</script>

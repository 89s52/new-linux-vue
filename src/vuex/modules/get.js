import axios from 'axios';

export default {
    state: {
        result: {}
    },
    actions: {
        getActionData({ commit }) {
            axios({
                url: 'http://xhuabu.market.alicloudapi.com/quote/real?security_code=SH.600422',
                headers: {
                    Authorization: 'APPCODE d5bd01e6bb184ea49b5e7301ccf44afd'
                }
            }).then(res => {
                console.log(res);
                commit('getData', res);
            })
        }
    },
    mutations: {
        getData(state, result) {
            console.log(result);
            state.result = result
        }
    }
}

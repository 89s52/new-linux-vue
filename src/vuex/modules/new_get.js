import axios from 'axios';

export default {
    state: {
        result: {}
    },
    actions: {
        new_getActionData({ commit }) {
            axios({
                url: '/new_users/getData',
            }).then(res => {
                res = res.data[0]
                commit('getData', res);
            })
        },
        new_onDel({ state }) {
            console.log("new_onDel!");
            axios
                .post("/new_users/delete", {
                    name: state.result.data.name
                })
                .then(res => {
                    console.log(res);
                });
        },
        new_onSave({ state }) {
            console.log('new_onSave');
            axios.post("/new_users/test", { new_data: state.result }).then(res => {
                console.log(res);
            });
        },
        new_onUpdate({ state }) {
            console.log('new_onUpdate');
            axios
                .post("/new_users/update", {
                    securityCode: state.result.data.securityCode,
                    updateName: state.result.data.name
                })
                .then(res => {
                    console.log(res);
                });
        },
        new_onFind({ commit, state }) {
            console.log('new_onFind');
            axios.post('/new_users/find', { new_name: state.result.data.name }).then(res => {
                let length =  res.data.length
                res = res.data[length-1];
                console.log(res);
                commit('getData', res)
            })
        }
    },
    mutations: {
        getData(state, result) {
            console.log(result.data);
            state.result = result
        }
    }
}

import axios from 'axios';

export default {
    state: {
        result: {}
    },
    actions: {
        new_getActionData({ commit }) {
            axios({
                url: '/new_users/find',
            }).then(res => {
                res = res.data[0]
                commit('getData', res);
            })
        },
        new_onDel() {
            console.log("new_onDel!");
            axios
                .post("/new_users/delete", {
                    code: 10000
                })
                .then(res => {
                    console.log(res);
                });
        },
        new_onSave() {
            console.log('new_onSave');
            axios.get("/new_users/test").then(res => {
                console.log(res);
            });
        },
        new_onUpdate() {
            console.log('new_onUpdate');
            axios
                .post("/new_users/update", {
                    code: 10000,
                    updateName: "中华大地"
                })
                .then(res => {
                    console.log(res);
                });
        },
    },
    mutations: {
        getData(state, result) {
            console.log(result.data);
            state.result = result
        }
    }
}
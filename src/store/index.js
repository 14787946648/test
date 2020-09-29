import Vue from 'vue';
import Vuex from 'vuex';
import group1 from "@/modules/group1";
import slogan from "@/modules/slogan";
import group2 from "@/modules/group2";
import statement from "@/modules/statement";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /**美食鉴赏1**/
        group1,
        /**标语**/
        slogan,
        /**美食鉴赏二**/
        group2,
        /**声明**/
        statement
    },
    mutations: {},
    actions: {},
    modules: {}
})

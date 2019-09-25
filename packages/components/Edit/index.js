import Edit from './Edit.vue';

/* istanbul ignore next */
Edit.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Edit.name, Edit);
};

export default Edit;
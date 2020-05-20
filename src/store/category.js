import firebase from 'firebase/app'


export default {
  actions: {
    async fetchCategories({commit, dispatch}) {
      try {
        const uid = await dispatch('getUid');
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {};
        return Object.keys(categories).map(key => ({id: key, ...categories[key]}));
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchCategoryById({commit, dispatch}, id) {
      try {
        const uid = await dispatch('getUid');
        const category = (await firebase.database().ref(`/users/${uid}/categories`).child(id).once('value')).val() || {};
        return {...category, id};
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async updateCategory({commit, dispatch}, {id, title, limit}) {
      try {
        const uid = await dispatch('getUid');
        const item = await firebase.database().ref(`/users/${uid}/categories`).child(id).update({title, limit});
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async updateCategoryMonths({commit, dispatch}, {id, months}) {
      try {
        const uid = await dispatch('getUid');
        const item = await firebase.database().ref(`/users/${uid}/categories/${id}`).child('months').update(months);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async createCategory({commit, dispatch}, {title, limit, months}) {
      try {
        const uid = await dispatch('getUid');
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit, months});
        return {title, limit, id: category.key}
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async deleteCategory({commit, dispatch}, id){
      try{
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/categories`).child(id).remove();
      }catch (e) {
        commit('setError', e);
        throw e;
      }
    }
  }
}
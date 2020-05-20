import firebase from 'firebase/app'

export default {
  actions: {
    async createRecord({dispatch, commit}, record) {
      try {
        const uid = await dispatch('getUid');
        return await firebase.database().ref(`/users/${uid}/records`).push(record)
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchRecords({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid');
        const records = (await firebase.database().ref(`/users/${uid}/records`).once('value')).val() || {};
        return Object.keys(records).map(key => ({id: key, ...records[key]}));
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchRecordsByMonth({dispatch, commit}, date) {
      try {
        const uid = await dispatch('getUid');
        const records = (await firebase.database().ref(`/users/${uid}/records`).orderByChild ('dateSection').equalTo(date).once('value')).val();
        return Object.keys(records).map(key => ({id: key, ...records[key]}));
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchRecordById({dispatch, commit}, id) {
      try {
        const uid = await dispatch('getUid');
        const record = (await firebase.database().ref(`/users/${uid}/records`).child(id).once('value')).val() || {};
        return {...record, id};
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchRecordByCategoryId({dispatch, commit}, categoryId) {
      try {
        const uid = await dispatch('getUid');
        const records = (await firebase.database().ref(`/users/${uid}/records`).once('value')).val() || {};
        return Object.keys(records).map(key => ({id: key, ...records[key]})).filter(i => i.categoryId === categoryId);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async deleteRecords({commit, dispatch}, categoryId) {
      try {
        const uid = await dispatch('getUid');
        const categoryRecords = await dispatch('fetchRecordByCategoryId', categoryId);
        const recordsId = categoryRecords.map(record => record.id);
        await Promise.all(recordsId.map(id => firebase.database().ref(`/users/${uid}/records`).child(id).remove()))
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async deleteRecord({commit, dispatch}, id) {
      try {
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/records`).child(id).remove()
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    }
  }
}
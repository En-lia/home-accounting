import firebase from 'firebase/app'

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async register({dispatch, commit, getters}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name,
          locale: getters.locale,
          temp: false
        })
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async registerTestUser({dispatch, commit, getters}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(`test-${Date.now()}@mail.ru`, '123456789');
        const uid = await dispatch('getUid');
        await firebase.functions().httpsCallable('createTestUser')(uid);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async deleteTestUser({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid');
        const info = (await firebase.database().ref(`/users/${uid}/info`).once("value")).val();
        if (!info.temp) {

          return
        }
        await firebase.database().ref(`/users/${uid}`).remove();
        await firebase.auth().currentUser.delete();
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({dispatch, commit}) {
      await dispatch('deleteTestUser');
      await firebase.auth().signOut();
      commit('clearInfo');
    },

  }
}
import { userService } from '../_services/user.service';
import fb from '@/firebase';

const user = JSON.parse(localStorage.getItem('user'));
const state = user ? { status: { loggedIn: true }, user} : { status: {}, user: null };


const actions = {
    /**
     * 
     * @param  username 
     * @param  userToken 
     * @param  department
     * @returns usuario recientemente loggeado al sistema.
     */
    async login({commit}, {username, userToken, department}) {
        commit('loginRequest');
        const firebaseLogin = await fb.login();
        
        if(firebaseLogin.success) {
            // Store / update the user info into the firebase            
            const uid = firebaseLogin.data.user.uid;
            const name = username;
            const token = userToken;
            const departmentt = department

            try {
                var result = await userService.createUpdate(uid, name, token, departmentt);
                if(result.success) {
                    // Set the user as login
                    userService.login(uid);
                    
                    // Set the state
                    var user = {
                        ID: uid,
                        Name: name,
                        Token: token
                    
                    };
                
                    commit('loginSuccess', user);
                    return {user: user};
                }
            } catch (err) {
                commit('loginFailure', err);
            }
            
        } else {
            commit('loginFailure', firebaseLogin.error);
        }    
        return null; 
    },
}

const mutations = {
    loginRequest(state) {
        state.status = {loggingIn: true};
        state.user = null;
    },
    loginSuccess(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
}

export const userModule = {
    namespaced: true,
    state,
    actions,
    mutations
}
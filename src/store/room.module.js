import { roomService } from '../_services/room.service';
const state = {activeRoom: null, users: []};

const actions = {
    /**
     * @param room identificador de la sala
     * @param currentUser usuario actual en el sistema
     * @param targetUser usuario seleccionado
     * @param department dato con el que se identifica la unidad academica
     * @function selectRoom selecciona la sala existente entre el usuario actual y el seleccionado, en caso de no existir (se desencadena por la seleccion de un usuario en la seccion derecha) la crea mediante el servicio createPrivateChat provisto por room.service.js
     */
    async selectRoom({commit, rootState}, {room, currentUser, targetUser, department}) {
        // If the room has already been created, then set it as active room (usually triggered from selecting the chat room from left)
        var roomID;
        if(room) {
            roomID = room;
        } else {
            // Else check if there is existing chat room created for the user
            const roomResp = await roomService.get(currentUser, targetUser, department);
            
            if(roomResp.success) {
                roomID = roomResp.roomID;
            } else {
                const resp = await roomService.createPrivateChat(currentUser, targetUser, department);
                if(resp.success) {
                    roomID = resp.roomID;
                }
            }
        }

        // Get the room detail
        const response = await roomService.getRoomDetail(roomID, department);
        if(response.success && rootState.contactModule.users) {
            // Postprocessing on the users
            var users = rootState.contactModule.users.filter(function(val) {
                return response.userIds.indexOf(val.id) >= 0;
            });
            
            commit('setUsers', users);
        }        
        
        commit('setActiveRoom', roomID);
    },

    /**
     * @param user usuario actual en el sistema
     * @param users lista de usuarios registrados en la base de datos
     * @param department dato con el que se identifica la unidad academica
     * @function generalRoom selecciona la sala general, en caso de no existir la crea mediante el servicio createPublicChat provisto por room.service.js
     */
    async generalRoom({commit, rootState}, {room, users, department}) {
        // If the room has already been created, then set it as active room (usually triggered from selecting the chat room from left)
        const ids = [];
         users.forEach(user => {
             ids.push(user.id)
         });
        var roomID;
        if(room) {
            roomID = room;
        } else {
            // Else check if there is existing chat room created for the user
            const roomResp = await roomService.getGeneral(ids, department);
            
            if(roomResp.success) {
                roomID = roomResp.roomID;
            } else {
                const resp = await roomService.createPublicChat(users, department);
                if(resp.success) {
                    roomID = resp.roomID;
                }
            }
        }

        // Get the room detail
        const response = await roomService.getRoomDetail(roomID, department);
        if(response.success && rootState.contactModule.users) {
            // Postprocessing on the users
            var usersId = rootState.contactModule.users.filter(function(val) {
                return response.userIds.indexOf(val.id) >= 0;
            });
            
            commit('setUsers', usersId);
        }        
        
        commit('setActiveRoom', roomID);
    },
    /**
     * @param message mensaje a ser enviado
     * @param department dato con el que se identifica la unidad academica
     * @function sendMessage envia el mensaje mediante el servicio sendMessage provisto por room.service.js
     * @returns retorna el resultado de la operación
     */
    async sendMessage({commit, state, rootState}, {message, department}) {
        var sender = rootState.userModule.user ? rootState.userModule.user.ID : null;
        var room = state.activeRoom;
        
        const resp = await roomService.sendMessage(sender, room, message, department);
       
        return resp;
    },
    
    /**
     * 
     * @param userIDs identificador del usuario
     * @param department dato con el que se identifica la unidad academica
     * @function createChatRoom agrega al usuario al chat general en caso de que no este, en caso de no existir la sala la crea
     * @returns retorna el resultado de la operación
     */
    async createChatRoom({commit, rootState}, {userIDs, department}) {
        var currentUserID = rootState.userModule.user ? rootState.userModule.user.ID : null;
        if(currentUserID) {
            userIDs.push(currentUserID);
        }
        
        const resp = await roomService.createChatRoom(userIDs, department);
        return resp;
    },
    /**
     * @function clearRoom limpia la selección del chat
     */
    clearRoom({commit}) {
        commit('clearRoom');
    },
    /**
     * 
     * @param user usuario actual en el sistema
     * @param users lista de usuarios registrados en la base de datos
     * @param department dato con el que se identifica la unidad academica
     * @function addUserToGeneral agrega al usuario que ingresó al chat general mediante el servicio addUser provisto por room.service.js
     * @returns retorna el resultado de la operación
     */
    async addUserToGeneral({commit, rootState}, {user, users, department}){
        var usersIDs = [];
        users.forEach(element => {
           
            usersIDs.push(element.id);
        });
        const resp = await roomService.getGeneral(department);

        var roomID = resp.roomID;

        const response = await roomService.addUser(usersIDs, roomID, department);
        
        commit('setUsers', users);

        return response;
    }
}

const mutations = {
    setActiveRoom(state, room) {
        state.activeRoom = room;
    },
    clearRoom(state) {
        state.activeRoom = null;
        state.users = [];
    },
    setUsers(state, users) {
        state.users = users;
    }
}

export const roomModule = {
    namespaced: true,
    state,
    actions,
    mutations
}
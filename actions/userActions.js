export function add(user) {
    const action = {
        type: "ADD_USER",
        name: user.name,
        id: user.id,
        seach: false
    }
    return action;
}


export function deleteUser(id){
    const action = {
        type: "DELETE_USER",
        id: id
    }
    return action;
}

export function searchUser(seachValue){
    const action ={
        type: "SEARCH_USERS",
        seachValue: seachValue
    }
    return action;

}
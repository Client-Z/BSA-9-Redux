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

export function seachUser(seachValue){
    const action ={
        type: "SERACH_USERS",
        seachValue: seachValue
    }
    return action;

}
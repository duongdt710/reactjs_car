// state: redux, noi luu giu data cua redux

const initState = {
    users: [
        {id: 1, name: 'Eric'},
        {id: 2, name: 'Thanh Duong'}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_OBJECT':
            console.log('>>>> run into delete redux', action);
            let users = state.users;
            users = users.filter(p => p.id !== action.payload.id)
            return {...state, users};
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 1000000)
            let user = {
                id: Math.floor(Math.random() * 1000000), name: 'random ' + id}
        return {...state, users: [...state.users, user]}
        default: return state;
    }
    return state;
}

export default rootReducer;
export const add_Todo = (data) => {
    return{
        type:"ADD_ITEAMS",
        payload : {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const delete_Todo = (id) => {
    return{
        type:"DELETE_ITEAMS",
        payload:{
            id
        }
    }
}
export const remove_Todo = () => {
    return{
        type:"REMOVE_ITEAMS"
    }
}

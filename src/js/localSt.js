export const setLS = ( name, information ) => {
    localStorage.setItem( name , information );
}

export const getLS = ( name ) => {
    return localStorage.getItem( name );
}

export const removeLS = ( name ) => {
    return localStorage.removeItem( name );
}

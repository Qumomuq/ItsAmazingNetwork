

export function authHeader() {
    // return authorization header with jwt token
    let user = localStorage.getItem('token');

    if (user) {
        return { 'Authorization': 'Bearer ' + user };
    } else {
        return { 'Authorization': ''};
    }
}

export function authExists() {
    return localStorage.getItem('token') !== null
}
// export function regExists() {
//     return data.prefixes
// }

export function getAuthToken() {
    return localStorage.getItem('token');
}

export function setAuthToken(token: any ) {
    if (token === undefined) {
        localStorage.setItem('token', token)
    }
}

// export async function  replaceToken(data : any)  {
//     let tok ={
//         toke:data,
//         toString: function(){
//             return this.toke;
//         }
//     }
//
// }

// export async function replaceToken(token: string){
//     let replace = /auth_token: /gi;
//     let replace1=  /'/gi
//     let tok = token;
//     toString: function(){
//         return this.tok
//     }
//     let newtok = tok.replace(replace, '');
//     let newtok1 = newtok.replace(replace1, '');
//     return newtok1
//
// }

export function logout() {
    return localStorage.removeItem('token')
}
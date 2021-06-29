

export const signup = (formUser)=>(
    $.ajax({
        method: 'post',
        url: '/api/user',
        data: {formUser}
    })
)

export const login = (formUser) =>(
    $.ajax({
        method: 'post',
        url: '/api/session',
        data: {formUser}
    })
)

export const logout = ()=>(
    $.ajax({
        method: 'delete',
        url: '/api/session'
    })
)
angular.module('appmain') 

.service('LoginService', function(){
    console.log(' Iniciando Servicio de Login');
    let listUsers=[];

    if (window.localStorage.getItem('usuario'))
        listUsers = JSON.parse(window.localStorage.getItem('usuario'));

    return {
        getUser: function () {
            if (window.localStorage.getItem('usuario'))
                return listUsers[0];
        },
        addUser: function (user) {
            listUsers.push(user);
            window.localStorage.setItem('usuario',JSON.stringify(listUsers));
        },
        deleteUser: function (user) {
            listUsers.pop(user);
            window.localStorage.removeItem('usuario');
        },

        userAuth: function (user) {
            if ( user.name == 'admin' && user.pwd == 'password123')
                return true
        else
            alert('Login Invalido');
        }
    }
});
angular.module('appmain') 

.service('ProductService', function(){
    console.log(' Iniciando Servicio de Productos');
    let backup = '[{"code":"3215","name":"Menthoplus Strong","detail":"Caramelo de Mentol","price":"20","stockmin":"115","stockmax":"1234","active":"Si"},{"code":"1242","name":"Bananita Dolca","detail":"Bocadito sabor banana recubierto de chocolate","price":"40","stockmin":"200","stockmax":"800","active":"Si"},{"code":"522","name":"Menthoplus Cherry","detail":"Caramelo de Cereza","price":"20","stockmin":"455","stockmax":"872","active":"Si"},{"code":"1122","name":"Paraguita","detail":"Chupetin de chocolate","price":"30","stockmin":"50","stockmax":"221","active":"No"},{"code":"1","name":"Test delete","detail":"Delete","price":"1","stockmin":"1","stockmax":"1","active":"No"}]'
    
    let listProducts=[];
    if (window.localStorage.getItem('productos'))
        listProducts = JSON.parse(window.localStorage.getItem('productos'));
    else{
        localStorage.setItem('productos', backup);
        listProducts = JSON.parse(backup);
        }
    return {
        getProducts: function () {
            return listProducts;
        },
        addProduct: function (msg) {
            listProducts.push(msg);
            window.localStorage.setItem('productos',JSON.stringify(listProducts));
        },
        deleteProduct: function (msg) {
            listProducts.splice(msg,1);
            window.localStorage.setItem('productos',JSON.stringify(listProducts));
        }
    }
});
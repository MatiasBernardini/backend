console.log("hola mundo");

const  addToCart = (productId)=> {
    console.log('El dato recibido es:', productId);
};

function changeRole (uid) {
    console.log (uid)
    const updateRol = fetch(`http://localhost:8080/api/users/premium/${uid}`, {method:"put"})
    .then((res) => res.json())
    .then((data) => data);

    location.href = location.href;

    return updateRol
};

function deleteUserJs (uid) {
    console.log (uid)
    const deleteUser = fetch(`http://localhost:8080/api/users/${uid}`, {method:"delete"})
    .then((res) => res.json())
    .then((data) => data);

    location.href = location.href;

    return deleteUser
};

function purchase (cid){
    console.log(cid);
    const purchase = fetch(`http://localhost:8080/api/carts/${cid}/purchase`, {method:"post"})
    .then((res) => res.json())
    .then((data) => data);

    window.location.href = '/purchase'

    return purchase
}
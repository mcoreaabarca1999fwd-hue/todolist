async function postData(endpoint,obj) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}
export {postData}

async function getData(endpoint) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}
export {getData}

async function deleteData(endpoint, id) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}

export {deleteData}

async function patchData(endpoint,obj,id) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`,{
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}

export {patchData}
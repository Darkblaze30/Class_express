const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    fetch('/product', {
        method: 'post',
        body:form
    }).then(res => {
        console.log(res);
        message('success','Producto agregado con exito')
        loadData()
    })
    .catch(err => {
        message('error','Error al intentar agregar el producto')
        console.log(err);
    })
    console.log(...form.entries());
})

function loadData(){
    fetch('/product').then((data) => {
        data.json().then((docs) => {
            console.log(docs);
            const tableContent = document.getElementById('tableContent')
            let content = '';
            docs.forEach(doc => {
                console.log(doc);
                content += `<tr>
                    <td>${doc.code}</td>
                    <td>${doc.name}</td>
                    <td>${doc.price}</td>
                    <td>
                        <input type ="button" value="eliminar" onClick="eliminarProducto('${doc._id}')"/>                    
                    </td>
                </tr>`
            });
            tableContent.innerHTML = content
        })
    }).catch((error) =>{

    })
}



function eliminarProducto(_id){
    fetch(`/product/${_id}`, {method: 'delete'}).then(res =>{
        console.log(res);
        message('success', 'Producto eliminado correctamente')
        loadData();
    })
    .catch(err => {
        console.log(err);     
        message('error', 'Producto no eliminado ')
    })
}

function message(type, msg){
    const message = document.getElementById('message')
    message.style = 'display: block;';
    message.classList.remove(type == 'success' ? 'error': 'success')
    message.classList.add('success');
    message.innerHTML = msg;
}

loadData()
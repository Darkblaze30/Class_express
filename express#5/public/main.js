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
    console.log(_id);
}

loadData()
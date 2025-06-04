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
                </tr>`
            });
            tableContent.innerHTML = content
        })
    }).catch((error) =>{})
}

loadData()
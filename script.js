// FUNCTION TAMBAH DATA
const btn_input = document.querySelector('#input-data').addEventListener('click', ()=>{
    const inputVal = document.querySelector('#input-val');
    const data_container = document.querySelector('#data-container');

    if(inputVal.value.length === 0){
        alert('INPUT MASIH KOSONG');
    }else{
        data_container.innerHTML += fragment(inputVal.value);
        inputVal.value = '';
    }
    let deleted = document.querySelectorAll('#delete');
    deleted.forEach(element => {
        element.addEventListener('click', function(){
            // this.parentElement.classList.add('d-none');
            this.parentElement.remove(this);
        })
    });
    let cheked = document.querySelectorAll('#done');
    cheked.forEach(e =>{
        e.addEventListener('change', function() {
            if (this.checked) {
                const parent = this.parentElement;
                parent.parentElement.classList.add('cheked');
            } else {
                const parent = this.parentElement;
                parent.parentElement.classList.remove('cheked');
            }
        });
    })
})

// FUNCTION HAPUS DATA
// for(let i = 0; i < deleted.length; i++){
//     deleted[i].addEventListener('click', ()=>{
//         alert('ss');
//     })
// }
function fragment(val){
    return `<div class="col-7 input-group mb-3 w-75 input-element">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" id="done">
                </div>
                <input type="text" class="form-control" value="${val}" disabled>
                <button class="btn btn-danger" type="button" id="delete">HAPUS</button>
            </div>`
            ;
}
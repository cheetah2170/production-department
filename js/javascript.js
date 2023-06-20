const plus = document.querySelector('#add-item');
const formGroup = document.querySelector('#form-groupx');
const removeItem = document.querySelector('#remove-item')

loadEventListener();


function loadEventListener(){

    plus.addEventListener('click',addRow)
    removeItem.addEventListener('click',removeRow)


}

function addRow(e){

    let x = document.createElement('div');
    x.innerHTML='<input type="date" class="form-group col-md-1" /><input type="time" class="form-group col-md-1 " /><select class="form-group col-md-1 "><option value="First ">اولیه</option><option value="Second ">ثانویه</option></select><input type=" " class="form-group col-md-1" placeholder="شماره قبض" /><input type=" " class="form-group col-md-1" placeholder="شماره مخزن" /><input type=" " class="form-group col-md-1" placeholder="اندازه مخزن" /><input type=" " class="form-group col-md-1" placeholder="دما" /><input type=" " class="form-group col-md-1" placeholder="آب" /><select class="form-group col-md-3 "><option value="Kerosine ">نفت سفید</option><option value="Gasoil ">گازوئیل</option><option value="Motor Spirite ">بنزین</option></select>';
    x.setAttribute('class','form-itemsx')
    formGroup.appendChild(x);
    e.preventDefault();

}

function removeRow(e){

    let y= formGroup.lastChild;
    y.remove();
}


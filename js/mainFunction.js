// Функція на додавання поста
$('#btnAddEX').click( clickBtnAddEX );

// функція редагування поста
$('#btnModel').click( clickBtnModel );

// Коли добавляю нову розмітку поста з класом remEX тоді він не реагує на функції, треба заново переоб*явити функцію для класа
function updateActions() 
{
    // функція на видалення поста
    $('.remEX').click( clickRemEX );

    // функція редагування поста
    $(".editEX").click( clickEditEX );
}

// Вертає розмітку поста з значеннями
function getCodePost(_id, _text )
{
    var htmlCode =  '<li class=" mb-2 list-group-item">' +
                        '    <div class="container row p-0" id="' + _id + '"> ' +
                        '            <div class="col-9 text-wrap text-break text-muted " > ' +
                                         _text +
                        '           </div> ' +
                        '            <div class="col-3  p-0"> ' +
                        '                <button type="submit" class=" m-b-1 btn btn-info btn-block editEX" data-toggle="modal" data-target="#exampleModal" >Edit</button> ' + 
                        '                <button type="submit" class=" m-b-1 btn btn-danger btn-block remEX " >Delete</button> ' +
                        '            </div> ' +
                        '    </div> ' +
                        ' </li>';
    return htmlCode;
}

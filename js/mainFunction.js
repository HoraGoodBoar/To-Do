// Add event for click btn add post
$(document).on('click', "#btnAddEX", clickBtnAddEX);

// Add event for click btn edit post
$(document).on('click', "#btnModel", clickBtnModel);

 // Add event for click classes remove post
 $(document).on('click', ".remEX", clickRemEX);

 // Add event for click classes edit post
 $(document).on('click', ".editEX", clickEditEX);

// Returns markup post
function getCodePost(_id, _text )
{
    var htmlCode =  '<li class=" mb-2 list-group-item" id="li_' + _id+'" >' +
                        '    <div class="container row p-0" id="' + _id + '"> ' +
                        '            <div class="col-9 text-wrap text-break text-muted " > ' +
                                         _text +
                        '           </div> ' +
                        '            <div class="col-3  p-0"> ' +
                        '                <button type="submit" class=" m-b-1 btn btn-info btn-block editEX " data-toggle="modal" data-target="#exampleModal" >Edit</button> ' + 
                        '                <button type="submit" class=" m-b-1 btn btn-danger btn-block remEX " onclick="clickRemEX" >Delete</button> ' +
                        '            </div> ' +
                        '    </div> ' +
                        ' </li>';
    return htmlCode;
}

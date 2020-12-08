function clickRemEX() // for classes .remEX
{
    var idPost =  $(this).parent().parent().attr('id');
    deletePost(idPost);

    $('#li_' + idPost).remove();
    editData();
}

function clickEditEX() // for classes .editEX
{
    var idPost =  $(this).parent().parent().attr('id');
    $('#textEXModel').val( getPostById(idPost) );
    $('#textEXModel').attr('name',idPost);
}

function clickBtnModel() // for id #btnModel
{
    var idPost = $('#textEXModel').attr('name') ;
    var textPost = $('#textEXModel').val();

    editPostById(idPost,textPost);
    $('#'+idPost).children()[0].innerHTML  = textPost;

    editData();
}

function clickBtnAddEX(e) // for id #btnAddEX
{
    e.preventDefault();
    var textEX = $('#textEX').val();

    $('#textEX').val('');
    if( textEX ==='' ||  textEX.trim(' ') == 0)
    {
        return;
    } 

    var pos = new  Post(idEX,textEX);
    posts.push(pos);

    $('#exList').append( getCodePost( idEX++, textEX ) ); 

    editData();
}
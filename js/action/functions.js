function clickRemEX() // .remEX
{
    var idPost =  $(this).parent().parent().attr('id');
    deletePost(idPost);

    $(this).parent().parent().parent().remove();
    editData();
}

function clickEditEX() // .editEX
{
    var idPost =  $(this).parent().parent().attr('id');
    $('#textEXModel').val( getPostById(idPost) );
    $('#textEXModel').attr('name',idPost);
}

function clickBtnModel() // #btnModel
{
    var idPost = $('#textEXModel').attr('name') ;
    var textPost = $('#textEXModel').val();

    editPostById(idPost,textPost);
    console.log(idPost + '  =  '+textPost);
    $('#'+idPost).children()[0].innerHTML  = textPost;

    editData();
}

function clickBtnAddEX() // #btnAddEX
{
    var textEX = $('#textEX').val();
        $('#textEX').val('');

        if( textEX ==='' ) return;

        var pos = new  post(idEX,textEX);
        posts.push(pos);

        $('#exList').append( getCodePost( idEX++, textEX ) ); 
        updateActions();

        editData();
}
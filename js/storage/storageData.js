// Is ready page load data
$('document').ready( loadData ) ;   

// LoadData
function loadData()
{
    if( window.localStorage ){

        var data =  localStorage.getItem('posts');
        if(data!==null)
        {
            posts.push( JSON.parse( data));
            posts = posts[0];
            console.log(posts);

            for(var i =0;i<posts.length;++i)
            {
                posts[i].id = idEX;
                $('#exList').append( getCodePost( idEX++, posts[i].text ) ); 
            }
        }
    }
    else alert(" localStorage не підтримує ваш браузер ");
}

// EditData
function editData()
{
    if( window.localStorage ){

        localStorage.setItem('posts', JSON.stringify( posts ));
    }
    else alert(" localStorage не підтримує ваш браузер ");
}
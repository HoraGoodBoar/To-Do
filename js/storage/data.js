class post // клас поста
{
    constructor(_id,_text) {
        this.id = _id;
        this.text = _text;
      }
}

var posts =new  Array(); // масив постів

var idEX = 0; // ід поста, якщо я буду ставити ІД по тому, скільки в нас постів є +1, тоді будуть помилки, бо якщо є два поста, ід 0, 1, та я видалю пост з ід 0, то новий пост матиме ід 1 (а у нас пост з таким ід вже є)

// Видалення поста з масиву
function deletePost(_id)
{
    for(var i=0;i<posts.length;++i)
    {
        if(posts[i].id == _id )
        {
            posts.splice(i,1); 
            break;
        }
    }
}

// Повернення поста по ід
function getPostById(_id)
{
    for(var i=0;i<posts.length;++i)
    {
        if(posts[i].id == _id )
        {
            return posts[i].text;
        }
    }
    return '';
}

// Редагування поста
function editPostById(_id,_text)
{
    for(var i=0;i<posts.length;++i)
    {
        if(posts[i].id == _id )
        {   
            posts[i].text = _text;
        }
    }
}



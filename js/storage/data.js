class Post // Classes the Post
{
    constructor(_id,_text) {
        this.id = _id;
        this.text = _text;
      }
}

var posts = []; // Array posts

var idEX = 0; // count posts

// Delete posts from array posts
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

// Get text post by id
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

// Edit post
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



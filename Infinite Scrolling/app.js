const postsContainer = document.querySelector('#posts-container');
const loader = document.querySelector('.loader');
const filter = document.querySelector('#filter');

document.addEventListener("DOMContentLoaded", showinitialsPosts);

filter.addEventListener('input', filterPosts);

let limit = 5;
let page = 1;

window.addEventListener('scroll', ()=>
{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >=scrollHeight-5)
    {
        page++;
        showinitialsPosts();
    }
});



async function showinitialsPosts(e)
{
    const posts = await getPosts();
    posts.forEach(post=>
        {   
            const div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `
                <div class="number">${post.id}</div>
                <div class"post-info>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-body">${post.body}</p>
                </div>
            `;

            postsContainer.appendChild(div);
        });
}







// Fetch posts from API

async function getPosts()
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}


function filterPosts(e)
{
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    
    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();

        console.log(term);

        if(title.indexOf(term) > -1 || body.indexOf(term)>-1)
        {
            post.style.display = 'flex';
        }
        else
        {
            post.style.display = 'none';
        }
    });
}




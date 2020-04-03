fetch("http://domiinnique.com/t9/wordpress/wp-json/wp/v2/posts")
  .then(res=>res.json())
.then(loopThroughPosts)

function loopThroughPosts(posts){
  posts.forEach(post=>{
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = post.title.rendered;
    copy.querySelector(".body").innerHTML=post.content.rendered;
    document.querySelector("main").appendChild(copy)
  })
}


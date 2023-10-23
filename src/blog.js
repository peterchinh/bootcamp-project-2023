var blogs = [
    {
        title: "Blog 1",
        date: "10/19/2023",
        description: "First blog",
        slug: "blog-1",
    },
    {
        title: "Blog 2",
        date: "10/19/2023",
        description: "Second Blog",
        slug: "blog-2",
    },
];
var blogContainer = document.getElementsByClassName("blog-container");
blogs.forEach(function (blog) {
    var blogElement = document.createElement("div");
    blogElement.innerHTML = "\n  <h2>".concat(blog.title, "</h2>\n  <p>Date: ").concat(blog.date, "</p>\n  <p>").concat(blog.description, "</p>\n  <a href=\"").concat(blog.slug, ".html\">See more</a>\n");
    blogContainer[0].appendChild(blogElement);
});

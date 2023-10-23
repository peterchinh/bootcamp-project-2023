type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
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

const blogContainer: HTMLCollectionOf<Element> =
  document.getElementsByClassName("blog-container");

blogs.forEach((blog) => {
  const blogElement = document.createElement("div");
  blogElement.innerHTML = `
  <h2>${blog.title}</h2>
  <p>Date: ${blog.date}</p>
  <p>${blog.description}</p>
  <a href="${blog.slug}.html">See more</a>
`;
  blogContainer[0].appendChild(blogElement);
});

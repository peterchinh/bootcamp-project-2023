// Blog type
export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
  };
  
  // List of Blog types
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

  export default blogs;
  
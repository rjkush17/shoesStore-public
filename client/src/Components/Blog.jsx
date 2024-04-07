import React from "react";
import blogImage from "../images/home/blog.jpg";
import blogImage2 from "../images/home/blog2.jpg";
import blogImage3 from "../images/home/blog3.jpg";

function Blog() {
  const blog = [
    {
      blogName: "Running Shoes for men",
      date: "April 24 2023",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage,
    },
    {
      blogName: "Running Shoes for men",
      date: "April 24 2023",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage2,
    },
    {
      blogName: "Running Shoes for men",
      date: "April 24 2023",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage3,
    },
  ];

  return (
    <section
      className="text-center w-10/12  mt-6 mobile:mt-auto mx-auto"
      data-scroll-section
    >
      <p className="my-10 mobile:my-20 text-3xl mobile:text-5xl font-extrabold text-center">
        Latest Post
      </p>
      <div className="grid gap-8 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3">
        {blog.map((val, ind) => (
          <div key={ind} className="mx-auto">
            <div className="min-w-24 min-h-24 overflow-hidden aspect-square">
              <img
                src={val.img}
                className="w-full h-full object-cover hover:scale-150 transition duration-1000 ease-in-out delay-150"
                alt={val.title}
              />
            </div>
            <div className="flex flex-col text-start justify-between my-4 text-lg leading-8 w-10/12">
              <span className="text-gray-500 font-medium">{val.date}</span>
              <h1 className="mt-4 leading-8 text-4xl">{val.blogName}</h1> <br />
              <p className="text-gray-500 text-xl">{val.description}</p>
              <button className="py-2 mt-6 px-4 border border-black w-fit text-black hover:bg-black hover:text-white rounded-full">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
{/* <div className="bg-red-500 w-full px-16">
<div className="w-10/12 mx-auto flex justify-between items-center">
        <div>
          <p>Blog</p>
          <h2>Step into Style: Discover the Latest Trends in Our Shoe Blog!</h2>
          <p> 17 March 2K24</p>
          <p>
            "Explore the latest shoe trends and styling tips. Dive into reviews
            and fashion insights. Click to elevate your style journey with our
            exclusive blog."
          </p>
        </div>
        <div className=" overflow-hidden aspect-video">
          <img src={blogImage1} alt="blog image"/>
        </div>
      </div>
</div> */}
     
    </section>
  );
}

export default Blog;

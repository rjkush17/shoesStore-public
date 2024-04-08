import React, {useEffect} from "react";
import blogImage from "../images/home/blog.jpg";
import blogImage2 from "../images/home/blog2.jpg";
import blogImage3 from "../images/home/blog3.jpg";

function Blog() {

  
  const blog = [
    {
      blogName: "Running Shoes for mesn",
      date: "April 24 2023",
      description:
        "Thiss is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage,
      ani : "fade-right"
    },
    {
      blogName: "Running Shoes fors men",
      date: "April 24 2023",
      description:
        "This is a widers card with supporting text below as a natural lead-in to additional content.",
      img: blogImage2,
      ani : "fade-up"
    },
    {
      blogName: "Running Shoess for men",
      date: "April 24 2023",
      description:
        "This is a wider cards with supporting text below as a natural lead-in to additional content.",
      img: blogImage3,
      ani : "fade-left"
    },
  ];

  return (
    <section
      className="text-center w-10/12  mt-6 mobile:mt-auto mx-auto"
     
    >
      <p className="my-10 mobile:my-20 text-3xl mobile:text-5xl font-extrabold text-center" data-aos="fade-down" >
        Latest Post
      </p>
      <div className="grid gap-8 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3">
        {blog.map((val, ind) => (
          <div key={ind} className="mx-auto" >
            <div className="min-w-24 min-h-24 overflow-hidden aspect-square" data-aos={`${val.ani}`}>
              <img
                src={val.img}
                className="w-full h-full object-cover hover:scale-150 transition duration-1000 ease-in-out delay-150"
                alt={val.title}
              />
               {/* data-aos={`${val.ani}`} */}
            </div>
            <div className="flex flex-col text-start justify-between my-4 text-lg leading-8 w-10/12">
              <span className="text-gray-500 font-medium" data-aos="fade-right">{val.date}</span>
              <h1 className="mt-4 leading-8 text-4xl"  data-aos="fade-right" >{val.blogName}</h1> <br />
              <p className="text-gray-500 text-xl"  data-aos="fade-left">{val.description}</p>
              <button className="py-2 mt-6 px-4 border border-black w-fit text-black hover:bg-black hover:text-white rounded-full">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;

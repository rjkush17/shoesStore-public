import React, {useEffect} from "react";
// img importing
import Profile from "../images/about/client1.jpg";
import blogImage from "../images/Blog/mainImg.jpg";
import blogImage2 from "../images/Blog/mainImg2.jpg";


function BlogPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Blog- Stylish Shoes Store";
  }, []);
  
  return (
    <main className="mt-8 mobile:mt-24 px-6 w-full tablet:w-[700px] laptop:w-[1000px] mx-auto text-xl">

      <h1 className="text-3xl mobile:text-5xl font-extrabold mb-4 laptop:mb-8">
        The go-to app for dog owners
      </h1>

      <div className="flex flex-col laptop:flex-row justify-center laptop:justify-between mb-6">

        <div className="flex items-center gap-6">

          <div className="w-16 h-16 mobile:w-24 mobile:h-24 rounded-full overflow-hidden">
            <img src={Profile} alt="" loading="lazy" className="w-full object-cover" />
          </div>

          <div className="flex flex-col justify-between py-6 text-xl">
            <p className="font-semibold">Vercial Megnum</p>
            <p>CEO of Stylish shoes</p>
          </div>

        </div>

        <div>
          <p className="text-gray-400 font-semibold text-start laptop:text-end mb-1 mobile:mb-6">23 April 2024</p>

          <div className="flex flex-wrap gap-4">
            <p className="rounded-full border-2 border-black py-0 mobile:py-2 px-2 mobile:px-4 font-semibold hover:bg-black hover:text-white">shoes</p>
            <p className="rounded-full border-2 border-black py-0 mobile:py-2 px-2 mobile:px-4 font-semibold hover:bg-black hover:text-white">men shoes</p>

            <p className="rounded-full border-2 border-black py-0 mobile:py-2 px-2 mobile:px-4 font-semibold hover:bg-black hover:text-white">blog</p>

            <p className="rounded-full border-2 border-black py-0 mobile:py-2 px-2 mobile:px-4 font-semibold hover:bg-black hover:text-white">blog of shoes</p>

          </div>
        </div>
      </div>
      <div className="overflow-hidden aspect-video rounded-2xl">
        <img src={blogImage} alt="" className="w-full" loading="lazy" />
      </div>

      <h1 className="my-4 mobile:my-12 tablet:text-5xl mobile:text-3xl text-xl">how we Started Stylish shoes</h1>

      <p className="my-6 tracking-wide leading-6 mobile:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto vel iste ut sequi nesciunt quidem placeat, incidunt corporis ex perspiciatis excepturi cum eveniet adipisci optio voluptates ab asperiores. Corrupti, hic? Autem nihil soluta voluptatum? Sunt iusto ipsa praesentium optio fugit, necessitatibus mollitia harum autem labore doloremque eveniet veritatis?</p>
      <p className="my-6 tracking-wide leading-6 mobile:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="my-6 tracking-wide leading-6 mobile:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est quisquam soluta maiores. Recusandae tempora tempore ducimus. Eveniet?</p>

      <h1 className="my-4 mobile:my-12 tablet:text-5xl mobile:text-3xl text-xl">Shoes that make you comfort</h1>

      <div className="overflow-hidden aspect-video rounded-2xl">
        <img src={blogImage2} alt="" className="w-full" loading="lazy" />
      </div>

      <p className="my-6 tracking-wide leading-6 mobile:leading-8">Loremum autem labore doloremque eveniet veritatis. Nobis asperiores deleniti architecto optio quia recusandae repellat! Debitis, ipsum quidem, molestias eaque iure consectetur unde nesciunt repellat alias, ipsa ex placeat deleniti soluta est harum?</p>
      <p className="my-6 tracking-wide leading-6 mobile:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto vel iste ut sequi nesciunt quidem placeat, incidunt corporis ex perspiciatis excepturi cum eveniet adipisci optio voluptates ab asperiores. Corrupti, hic? Autem nihil soluta voluptatum? Sunt iusto ipsa praesentium opti labore doloremque eveniet veritatis. Nobis asperiores deleniti architecto optio quia recusandae repellat! Debitis, ipsum quidem, molestias eaque iure consectetur unde nesciunt repellat alias, ipsa ex placeat deleniti soluta est harum?</p>
      <p className="my-6 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto vel iste ut sequi nesciunt quidem placeat, incidunt corporis ex perspiciatis excepturi cum evenietrepellat alias, ipsa ex placeat deleniti soluta est harum?</p>
    </main>
  );
}

export default BlogPage;

import preloader from "../images/loader.gif"

function Preloader({condition}) {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-[100vh] mobile:max-h-96 bg-white cursor-wait">
        <img src={preloader} alt="Loading..." />
    </section>
  )
}

export default Preloader
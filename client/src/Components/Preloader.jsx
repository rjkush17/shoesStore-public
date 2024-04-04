import preloader from "../images/loader.gif"

function Preloader() {
  return (
    <section className="flex justify-center items-center w-screen h-[80vh] mobile:h-screen bg-white">
        <img src={preloader} alt="Loading..." />
    </section>
  )
}

export default Preloader
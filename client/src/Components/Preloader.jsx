import preloader from "../images/loader.gif"

function Preloader({condition}) {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-[100vh] mobile:max-h-96 bg-white cursor-wait">
        <img src={preloader} alt="Loading..." />
        {condition && <p className="text-sm text-red-400 mb-6 text-center">Please wait while we fetch your data. Our server is warming up and it might take a little extra time.</p>}
    </section>
  )
}

export default Preloader
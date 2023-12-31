import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Plan from "./components/Plan/Plan"


function App() {

  return (
    <>
      <Navbar />
      <main className="main-content w-full px-[var(--margin-x)] pb-8">
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="mt-4 text-2xl font-medium tracking-wide text-slate-700 dark:text-navy-100">
              Gittiğimiz Yerler
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Plan />
          </div>
        </div>
      </main>
    </>
  )
}
export default App

import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Plan from "./components/Plan/Plan"


function App() {

  return (
    <>
      <Navbar />
      <main class="main-content w-full px-[var(--margin-x)] pb-8">
        <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          <div class="col-span-12 lg:col-span-8">
            <div class="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div class="col-span-12 lg:col-span-4">
            <Plan />
          </div>
        </div>
      </main>
    </>
  )
}
export default App

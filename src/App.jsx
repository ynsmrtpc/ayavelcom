import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Plan from "./components/Plan/Plan"
import Helmet from "react-helmet";

const App = () => {

  const locations = [
    {
      id: 1,
      title: "Bursa",
      location: "Bursa",
      star: 3,
      image: "https://www.bursaogretmenevi.com.tr/wp-content/uploads/2020/09/bursa-merkez-gezilecek-yerler.jpg",
    },
    {
      id: 2,
      title: "Eskişehir",
      location: "Eskişehir",
      star: 3.4,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sazova_Park_2.jpg",
    },
    {
      id: 3,
      title: "Çanakkale",
      location: "Çanakkale",
      star: 4.5,
      image: "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2021/11/tarih_kokan_sehir_canakkalede_gorulmesi_gereken_yerler_1616065248_5355.jpg",
    },
  ]

  const plans = [
    {
      id: 1,
      location: "Edirne",
      image: "https://media.istockphoto.com/id/609082634/tr/foto%C4%9Fraf/bridge-above-meric-river-and-selimiye-mosque.jpg?s=612x612&w=0&k=20&c=kCZHq30Ssf8Ftlzz3NEUVnMOn2YQyOdKg-LxObRxBow=",
      date: "2024-05-12"
    },
    {
      id: 2,
      location: "Kocaeli",
      image: "https://www.matcarrental.com/dosya/icerik/59-1-kocaeli-gezilecek-yerler.jpg",
      date: "2024-07-04"
    },
    {
      id: 3,
      location: "Urfa",
      image: "https://image.cnnturk.com/i/cnnturk/75/740x416/5efb5404bf214410444a3e8d.jpg",
      date: "2024-02-23"
    },
  ]


  return (
    <>
      <Helmet>
        <title>Ayavel</title>
        <meta name="description" content="ayavel" />
      </Helmet>

      <Navbar />

      <main className="main-content w-full px-[var(--margin-x)] pb-8">
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 my-12">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-2xl font-medium tracking-wide text-slate-700 dark:text-navy-100">
              Gittiğimiz Yerler
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
              {locations.map(location => (
                <Card key={location.id} data={location} />
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
                Gideceğimiz Yerler
              </h2>
            </div>
            {plans.map(plan => (
              <Plan key={plan.id} data={plan} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
export default App

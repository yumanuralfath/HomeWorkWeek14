import ContainerBooks from "@/components/Container";
import Header from "@/components/Header";
import Navigation from "@/components/NavBar";


export default function Home() {
  return (
    <section className="homepage bg-black min-h-screen font-jkt text-txt ">
      <Header />
      <div className="home-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col ">
        <div className="container-products h-auto min-h-screen px-4 md:px-10 py-10 w-full bg-black rounded-xl pb-28 shadow-3xl md:w-10/12 mt-12">
          <div className="title-product">
            <h4 className="text-xl font-bold text-txt font-jkt">Alfath Library</h4>
          </div>
          <ContainerBooks />
        </div>
      </div>
      <Navigation />
    </section>
  );
}
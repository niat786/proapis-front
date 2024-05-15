"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";

const about = () => {
  return (
    <>
    <Header></Header>

    <main className="overflow-hidden">
        <section className="relative">
            <div className="relative pt-24 lg:pt-28">
                <div className="mx-auto px-6 max-w-7xl md:px-12">
                    <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                      
                        <h1
                            className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]">About Pro APIs</h1>
                        <p
                            className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block">
                            At ProAPIs, Inc., we specialize in delivering enterprise-grade API solutions that ensure
                            unparalleled reliability, scalability, and cost-efficiency for your data-centric projects.
                        </p>
                        <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">Highly
                            customizable components for building modern websites and applications, with your personnal
                            spark.</p>
                      
                    </div>
                </div>
            </div>
        </section>
      
    
        <section>
            <div className="pt-10">
                <div className="mx-auto px-6 max-w-6xl text-gray-500 privacy-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit dolor iure quidem eum officia commodi accusantium corporis alias dignissimos!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit dolor iure quidem eum officia commodi accusantium corporis alias dignissimos!</p>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quo rerum vel soluta laboriosam incidunt optio ipsum natus blanditiis cumque libero a quod repellat, quibusdam fuga eius dolorum accusamus nobis voluptatibus ab corrupti consequatur iure. Obcaecati sequi nostrum quam delectus commodi deserunt provident vero, quaerat eius autem, hic sint blanditiis nisi laborum at qui porro eveniet odio. Quaerat vitae quidem accusamus et aliquam dolorum aliquid alias ab ad ex reiciendis, culpa quisquam, soluta sint. Incidunt nisi molestias sapiente atque ipsam unde. Placeat veniam hic natus numquam neque aut quod, maxime ab cupiditate totam accusamus consequatur. Vitae quae quia quis soluta.</p>
                   <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laborum!</h2>
                   <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laborum!</h3>
                   <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laborum!</h4>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid neque fuga mollitia non odit cupiditate harum, voluptatibus molestiae labore vitae.</p>
                </div>
            </div>
        </section>
     
    </main>
  <Footer></Footer>

    </>
  )
}

export default about
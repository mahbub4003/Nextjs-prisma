import Service from "./Service";
const ServicesCom = ({ services }) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our <br /> awesome{" "}
            <span className="text-blue-500">Services</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {services.map((serv) => {
              return <Service key={serv.id} serv={serv} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCom;

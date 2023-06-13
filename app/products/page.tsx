export default function OurProducts() {
  return (
    <>
      <div className="pt-[148px]"></div>
      <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
        <h1 className="text-5xl font-light mt-[20px]">Our Products</h1>
        <h4 className="text-xl font-light mt-[20px]">
          Pristine by Nature. Clean by Routine. Consistent by Design.
        </h4>
        <div className="flex mb-[20px] mt-[40px] pr-[150px] pl-[150px]">
          <figure className="flex flex-col mt-auto">
            <img
              src="home-butter.png"
              className="w-[100%] ml-auto mr-auto"
            />
            <figcaption>BUTTER</figcaption>
          </figure>

          <figure className="flex flex-col mr-20">
            <img
              src="home-milk.png"
              className="w-[80%] mr-auto ml-auto"
            />
            <figcaption>BUTTER</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

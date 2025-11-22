
export default function Home() {
  return (
    <div className="main w-full">

      <nav className="navbar flex justify-center py-4 border-b-[0.9] border-neutral-800">
        <div className="container justify-between flex items-center w-150">
          <div className="title">
            <span className="text-2xl p-3">Softmerise</span>
          </div>
          {/* <ul className="flex ms-auto align-middle">
            <li>
              <a className="ms-1 p-3 text-base" href="">Blog</a>
            </li>
            <li>
              <a className="ms-1 p-3 text-base" href="">Join Us</a>
            </li>
          </ul> */}
        </div>
      </nav>

      <section className="flex justify-center">
        <div className="container py-9 w-150">
          <p className="mx-auto  px-3 text-xl">
            This is a product-centric research lab engineering user-focused solutions for Businesses.
          </p>
          <br />
          <p className="mx-auto  px-3 text-xl">
            We're builing <u>Softmerise</u> with the vision to build intutive software that re-engineers static business logic to the adaptive, high-efficiency workflows of the post-generative AI era.
          </p>
        </div>
      </section>
    </div>
  );
}

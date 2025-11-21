
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
        <div className="container w-150">
          <p className="mx-auto py-8 px-3 text-xl">
            This is a product-centric research lab engineering the deficits of the digital economy. We translate complex blockchain protocols into intuitive, user-focused solutions for the next generation of the web.
          </p>
        </div>
      </section>
    </div>
  );
}

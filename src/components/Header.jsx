import * as React from "react";

function Header() {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/efa21c1128826d701b0aa4df30439c4eac1f72d263646fb32f1bad205fd2bb7c?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", alt: "Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdb917886cb55641356e58ae25332fcf2d63184473759fc57080a1946430816e?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", alt: "Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3a0831782ec950e39249817d5fcd7c7e6e7fdf14bc6231efe44f76b65f480c7?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", alt: "Icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e023b6ccac9953e5907624953f4542a7fe19638a2f9ce22e79ec27abe2236030?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", alt: "Icon 4" },
  ];

  return (
    <div className="px-16 py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-1.5 justify-center items-center text-4xl font-bold text-black whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d164ebfae5667cf3962985ee559ec21f5981c3fae40e8bccf59a3007e0249a0c?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3"
              alt="Furniro logo"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.56] w-[50px]"
            />
            <div className="self-stretch my-auto">Furniro</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <div tabIndex="0" role="button">Home</div>
            <div tabIndex="0" role="button">Shop</div>
            <div tabIndex="0" role="button">About</div>
            <div tabIndex="0" role="button">Contact</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 self-stretch my-auto max-md:mt-10">
            {icons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 w-7 aspect-square"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
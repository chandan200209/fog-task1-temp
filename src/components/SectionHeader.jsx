import * as React from "react";

function ImageWithAlt({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

function Breadcrumb({ items }) {
  return (
    <div className="flex gap-1.5 text-base">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="grow font-medium">{item.label}</div>
          {item.icon && (
            <img
              loading="lazy"
              src={item.icon}
              className="object-contain shrink-0 my-auto w-5 aspect-square"
              alt=""
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[316px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <ImageWithAlt
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87471fbb90d8d8465897d9248c7ea7b968f3d364c328f53b53c079250eef8cc8?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3"
        alt="Background Image"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col max-w-full w-[124px]">
        <div className="text-5xl font-medium max-md:text-4xl">Shop</div>
        <Breadcrumb
          items={[
            {
              label: 'Home',
              icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3',
            },
            { label: 'Shop', icon: '' },
          ]}
        />
      </div>
    </div>
  );
}

export default SectionHeader;
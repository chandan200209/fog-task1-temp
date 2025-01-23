import * as React from "react";

function FooterFeature({ src, alt, title, subtitle }) {
  return (
    <div className="flex gap-2.5 items-center my-auto min-w-[160px]">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain shrink-0 my-auto aspect-square w-[40px]"
      />
      <div className="flex flex-col my-auto min-w-[160px]">
        <div className="text-lg font-semibold text-neutral-800">{title}</div>
        <div className="text-md font-medium text-zinc-500">{subtitle}</div>
      </div>
    </div>
  );
}

export default FooterFeature;
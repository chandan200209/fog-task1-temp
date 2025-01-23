import * as React from "react";
import FooterFeature from './FooterFeature';

function Footer() {
  const features = [
    { 
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d114e200a4fcb5042d0489f99c0c35bff1a1f5c695307704fd1b9a294a8c409a?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", 
      alt: "High Quality Materials", 
      title: "High Quality", 
      subtitle: "crafted from top materials" 
    },
    { 
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eaaf181c8ca78a642dbcc8455e8a760f416905ec180063adaa625c92bc6b4f54?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", 
      alt: "Warranty Protection", 
      title: "Warranty Protection", 
      subtitle: "Over 2 years" 
    },
    { 
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb5b1156dc4b6ac3b7f2736eefa639fbaf75411675cc48c2a42db128ce8fe3ac?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", 
      alt: "Free Shipping", 
      title: "Free Shipping", 
      subtitle: "Order over 150 $" 
    },
    { 
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cd812cec2eedb2539537e53c40a1b5eae1abee8b19b3c70629a57eecd74e738?placeholderIfAbsent=true&apiKey=1da8a1d242f041a785d6ebfaf6d70ad3", 
      alt: "24 / 7 Support", 
      title: "24 / 7 Support", 
      subtitle: "Dedicated support" 
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center py-24 bg-orange-50" role="contentinfo">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1334px]">
        {features.map((feature, index) => (
          <FooterFeature 
            key={index}
            src={feature.src}
            alt={feature.alt}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
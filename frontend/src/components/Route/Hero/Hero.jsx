import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import hero from "../../../Assests/hiy.png";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] sm:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${styles.section} w-full sm:w-[90%] lg:w-[60%] p-4 sm:p-8`}
      >
        <h1
          className={`text-[25px] sm:text-[35px] lg:text-[60px] leading-[1.2] text-[#3A003D] font-[800] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-4 sm:pt-6 text-[14px] sm:text-[16px] lg:text-[18px] font-[Poppins] font-[400] text-[#000000] text-justify max-w-[600px]">
          A multi-shop e-commerce website is a versatile online platform that
          allows multiple individual or independent retailers to showcase and
          sell their products in one centralized location. Shoppers can browse
          through a diverse range of products from various sellers, compare
          prices and features, and make purchases from different stores within a
          single website.
        </p>

        <Link to="/products" className="inline-block mt-4 sm:mt-6">
          <div className={`${styles.button}`}>
            <span className="text-[#fff] font-[Poppins] text-[16px] sm:text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

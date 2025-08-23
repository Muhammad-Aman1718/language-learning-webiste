interface FeatureCardWithImageProps {
  img?: string;
  heading?: string;
  para?: string;
  headingStyle?: string;
  paraStyle?: string;
  sectionStyle?: string;
  divStyle?: string;
}

const FeatureCardWithImage = ({
  divStyle,
  heading,
  headingStyle,
  img,
  para,
  paraStyle,
  sectionStyle,
}: FeatureCardWithImageProps) => {
  return (
    <section className={`  bg-white py-12  max-md:py-0 max-md:mb-8 `}>
      <div
        className={`${sectionStyle}   mx-auto px-6 flex justify-between gap-8  max-md:flex-col  max-md:px-5 max-md:gap-2  `}
      >
        {/* Image */}
        <div>
          <img
            src={img} // apna image path yahan dalna
            alt="Classroom"
            className=" w-full "
          />
        </div>

        {/* Text */}
        <div className={`${divStyle} w-full max-w-[600px] `}>
          <h2 className={`${headingStyle}   mb-6 max-md:mb-2 `}>{heading}</h2>
          <p className={` ${paraStyle} mt-4 max-md:mt-0`}>{para}</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardWithImage;

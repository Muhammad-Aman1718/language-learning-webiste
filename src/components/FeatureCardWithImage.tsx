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
    <section className={`  bg-white py-12`}>
      <div
        className={`${sectionStyle}   mx-auto px-6 flex justify-between gap-8    `}
      >
        {/* Image */}
        <div>
          <img
            src={img} // apna image path yahan dalna
            alt="Classroom"
            // width={500}
            // height={300}
            className=" w-full "
          />
        </div>

        {/* Text */}
        <div className={`${divStyle} w-full max-w-[600px] `}>
          <h2 className={`${headingStyle}   mb-6 `}>{heading}</h2>
          <p className={` ${paraStyle} mt-4 `}>{para}</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardWithImage;

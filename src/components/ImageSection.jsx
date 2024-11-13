const ImageSection = ({ src, alt }) => {
    return (
      <div className="flex justify-center mb-8 md:mb-28">
        <img
          className="w-full h-auto p-4 rounded-3xl"
          style={{ backgroundColor: '#F1FEC4' }}
          src={src}
          alt={alt}
        />
      </div>
    );
  };
  
  export default ImageSection;
  
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

const ImageWithFallback = ({
  src,
  fallbackSrc = '/images/fallback.jpg',
  alt,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  console.log('Attempting to load image:', src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={(e) => {
        console.error('Image load error for:', src);
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback; 
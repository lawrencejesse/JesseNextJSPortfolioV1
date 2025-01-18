export const validateImagePath = (path: string): string => {
  // List of valid image paths in your public/images directory
  const validImages = [
    'MaresSnowStorm.jpg',
    'family_2024.jpg',
    'PrimeTimeBoys.JPG',
    'jesse_brandy_wedding1.jpg',
    'edinburgh_castle_cannon.jpg',
    'Mare_and_Colt.jpg',
    'jesselawrence.jpg'
  ];

  // Extract filename from path
  const filename = path.split('/').pop();
  
  if (!filename || !validImages.includes(filename)) {
    console.warn(`Invalid image path: ${path}`);
    return '/images/fallback.jpg'; // Return fallback image path
  }

  return path;
};

export const getImageDimensions = async (path: string): Promise<{ width: number; height: number }> => {
  try {
    const img = new Image();
    img.src = path;
    
    return new Promise((resolve) => {
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
    });
  } catch (error) {
    console.error('Error getting image dimensions:', error);
    return { width: 1920, height: 1080 }; // Default dimensions
  }
}; 
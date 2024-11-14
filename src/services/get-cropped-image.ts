import img from "../assets/no-image-placeholder.webp";

const getCroppedImage = (url: string) => {
  if (!url) return img;
  let target = "media/";
  let i = url.indexOf(target) + target.length;
  return url.slice(0, i) + "crop/600/400/" + url.slice(i);
};

export default getCroppedImage;

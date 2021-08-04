import Image from 'next/image';
 
export default function Avatar({ url, className }){
  return (
    <Image 
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`rounded-full h-12 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  )
}

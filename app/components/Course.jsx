import Image from "next/image";
import Link from "next/link";

// components/CourseCard.js
const CourseCard = ({ image, name, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <Image src={image} alt={name} width={1000} height={100} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
         <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank"><button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Enroll Now
          </button></Link> 
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  
// 'use client'
// import React, { useState } from 'react';
// import Partners from '../components/Partners';
// import Footer from '../components/Footer';

// const Verification = () => {
//   const [certificateNumber, setCertificateNumber] = useState('');
//   const [certificateData, setCertificateData] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError('');
//     setCertificateData(null);

//     try {
//       const response = await fetch(`https://giwost-server-production.up.railway.app/admin/certificate/${certificateNumber}`);
//       const result = await response.json();

//       if (response.ok) {
//         setCertificateData(result.data);
//       } else {
//         setError(result.message || 'Certificate not found.');
//       }
//     } catch (error) {
//       setError('Failed to fetch certificate data. Please try again.');
//     }
    
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh] relative">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <p className="font-bold relative z-10 text-[2rem] lg:text-[4rem] font-mono">
//           Verify Certificates
//         </p>
//         <div className="flex justify-center gap-2 items-center">
//           <hr className="w-12 border border-red-500" />
//           <p className="relative z-10 text-sm">Verify</p>
//           <hr className="w-12 border border-red-500" />
//         </div>
//       </div>

//       <div className="flex justify-center p-8">
//         <form onSubmit={handleSearch} className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
//           <label htmlFor="certificateNumber" className="block text-sm font-medium text-gray-700">Certificate Number</label>
//           <input
//             id="certificateNumber"
//             type="text"
//             value={certificateNumber}
//             onChange={(e) => setCertificateNumber(e.target.value)}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             disabled={loading}
//           >
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//           {error && <div className="text-red-600">{error}</div>}
//         </form>
//       </div>

//       {certificateData && (
//         <div className="p-8">
//           <h2 className="text-2xl font-semibold">Certificate Details</h2>
//           <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
//             <p><strong>Certificate Number:</strong> {certificateData.certificateNumber}</p>
//             <p><strong>Course:</strong> {certificateData.course}</p>
//             <p><strong>Student Name:</strong> {certificateData.studentName}</p>
//             <p><strong>Father&apos;s Name:</strong> {certificateData.fatherName}</p>
//             <p><strong>Mother&apos;s Name:</strong> {certificateData.motherName}</p>
//             <p><strong>Issued Date:</strong> {new Date(certificateData.issuedDate).toLocaleDateString()}</p>
//             <p><strong>Date of Birth:</strong> {new Date(certificateData.dob).toLocaleDateString()}</p>
//             <p><strong>Gender:</strong> {certificateData.gender}</p>
//             <p><strong>Courses:</strong> {certificateData.courses.join(', ')}</p>
//           </div>
//         </div>
//       )}

//       <Partners />
//       <Footer />
//     </div>
//   );
// };

// export default Verification;

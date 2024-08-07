'use client';

import React, { useEffect, useState } from 'react';

const CertificatesTablePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCertificates = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch(`https://giwost-server.onrender.com/admin/certificate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (response.ok) {
          // Sort the certificates by student name
          const sortedCertificates = result.data.sort((a, b) => a.studentName.localeCompare(b.studentName));
          setCertificates(sortedCertificates);
        } else {
          setError(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setError("Failed to fetch certificates. Please try again.");
      }
      setLoading(false);
    };

    fetchCertificates();
  }, []);

  const handleDelete = async (certificateId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this certificate?");
    if (!isConfirmed) return;

    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await fetch(`https://giwost-server.onrender.com/admin/certificate/${certificateId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (response.ok) {
        setCertificates(certificates.filter(certificate => certificate._id !== certificateId));
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to delete certificate. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-6xl p-8 space-y-8 bg-white rounded-md shadow-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Certificates
        </h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {certificates.map((certificate) => (
                  <tr key={certificate._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{certificate.certificateNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{certificate.courses.join(', ')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{certificate.studentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(certificate.issuedDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(certificate.dob).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{certificate.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(certificate._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesTablePage;

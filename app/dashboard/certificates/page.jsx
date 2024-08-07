'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const CertificatesPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      certificateNumber: '',
      course: '',
      studentName: '',
      fatherName: '',
      motherName: '',
      issuedDate: '',
      courses: '',
      dob: '',
      gender: '',
    },
    validationSchema: Yup.object({
      certificateNumber: Yup.string().required('Certificate number is required'),
      course: Yup.string().required('Course is required'),
      studentName: Yup.string().required('Student name is required'),
      fatherName: Yup.string().required('Father name is required'),
      motherName: Yup.string().required('Mother name is required'),
      issuedDate: Yup.date().required('Issued date is required'),
      courses: Yup.string().required('Courses are required'),
      dob: Yup.date().required('Date of birth is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setMessage("");

      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch("https://giwost-server.onrender.com/admin/certificate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            certificateNumber: values.certificateNumber,
            course: values.course,
            studentName: values.studentName,
            fatherName: values.fatherName,
            motherName: values.motherName,
            issuedDate: new Date(values.issuedDate).toISOString(),
            courses: values.courses.split(',').map(course => course.trim()),
            dob: new Date(values.dob).toISOString(),
            gender: values.gender,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          setMessage("Certificate successfully created!");
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
        } else {
          setMessage(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setMessage("Failed to create certificate. Please try again.");
      }

      setLoading(false);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-md shadow-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Upload Certificate
        </h2>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="certificateNumber" className="block text-sm font-medium text-gray-700">
                Certificate Number
              </label>
              <input
                id="certificateNumber"
                name="certificateNumber"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.certificateNumber}
              />
              {formik.touched.certificateNumber && formik.errors.certificateNumber ? (
                <div className="text-red-600">{formik.errors.certificateNumber}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <input
                id="course"
                name="course"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.course}
              />
              {formik.touched.course && formik.errors.course ? (
                <div className="text-red-600">{formik.errors.course}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
              <input
                id="studentName"
                name="studentName"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
              />
              {formik.touched.studentName && formik.errors.studentName ? (
                <div className="text-red-600">{formik.errors.studentName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                Father&apos;s Name
              </label>
              <input
                id="fatherName"
                name="fatherName"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
              />
              {formik.touched.fatherName && formik.errors.fatherName ? (
                <div className="text-red-600">{formik.errors.fatherName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">
                Mother&apos;s Name
              </label>
              <input
                id="motherName"
                name="motherName"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.motherName}
              />
              {formik.touched.motherName && formik.errors.motherName ? (
                <div className="text-red-600">{formik.errors.motherName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="issuedDate" className="block text-sm font-medium text-gray-700">
                Issued Date
              </label>
              <input
                id="issuedDate"
                name="issuedDate"
                type="date"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.issuedDate}
              />
              {formik.touched.issuedDate && formik.errors.issuedDate ? (
                <div className="text-red-600">{formik.errors.issuedDate}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="courses" className="block text-sm font-medium text-gray-700">
                Courses (comma separated)
              </label>
              <input
                id="courses"
                name="courses"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.courses}
              />
              {formik.touched.courses && formik.errors.courses ? (
                <div className="text-red-600">{formik.errors.courses}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div className="text-red-600">{formik.errors.dob}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="" label="Select gender" />
                <option value="male" label="Male" />
                <option value="female" label="Female" />
                <option value="other" label="Other" />
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-red-600">{formik.errors.gender}</div>
              ) : null}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Upload Certificate'}
            </button>
            <h1 className="text-gray-700 py-5">{message}</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificatesPage;

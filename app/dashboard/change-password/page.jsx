'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const ChangePasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old password is required"),
      newPassword: Yup.string().required("New password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setMessage("");
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch("https://giwost-server-production.up.railway.app/admin/reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          }),
        });
        const result = await response.json();
        if (response.ok) {
          setMessage("Password reset successful!");
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
        } else {
          setMessage(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setMessage("Failed to reset password. Please try again.");
      }
      setLoading(false);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-md shadow-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Change Password
        </h2>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="oldPassword" className="sr-only">Old Password</label>
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                autoComplete="old-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Old Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oldPassword}
              />
              {formik.touched.oldPassword && formik.errors.oldPassword ? (
                <div className="text-red-600">{formik.errors.oldPassword}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="newPassword" className="sr-only">New Password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-red-600">{formik.errors.newPassword}</div>
              ) : null}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? 'Changing...' : 'Change Password'}
            </button>
            <h1 className="text-gray-700 py-5">{message}</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;

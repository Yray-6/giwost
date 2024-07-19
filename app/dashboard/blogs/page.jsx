'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';

export default function BlogFormPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();

  const handleCloseModal = () => setOpenModal(false);

  const onDrop = (acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  const formik = useFormik({
    initialValues: {
      topic: "",
      description: "",
    },
    validationSchema: Yup.object({
      topic: Yup.string().required("Topic is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values) => {
      if (!imageFile) {
        setMessage("Image is required");
        setOpenModal(true);
        return;
      }

      setLoading(true);
      setMessage("");

      try {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'giwost'); // Add your upload preset here

        const cloudinaryResponse = await fetch(`https://api.cloudinary.com/v1_1/dghwjez0a/image/upload`, {
          method: 'POST',
          body: formData,
        });

        const cloudinaryResult = await cloudinaryResponse.json();
        values.imageUrl = cloudinaryResult.secure_url;

        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch("https://giwost-server-production.up.railway.app/admin/blog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });
        const result = await response.json();

        if (response.ok) {
          setMessage("Blog Post successfully created!");
          setOpenModal(true);
          setTimeout(() => {
            router.push('/dashboard/blogsview');
          }, 2000);
        } else {
          setMessage(result.message || "Something went wrong. Please try again.");
          setOpenModal(true);
        }
      } catch (error) {
        setMessage("Failed to create blog post. Please try again.");
        setOpenModal(true);
      }
      setLoading(false);
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-md shadow-md">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create a Blog Post
          </h2>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="topic" className="sr-only">Topic</label>
                <input
                  id="topic"
                  name="topic"
                  type="text"
                  autoComplete="topic"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Topic"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.topic}
                />
                {formik.touched.topic && formik.errors.topic ? (
                  <div className="text-red-600">{formik.errors.topic}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="description" className="sr-only">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  autoComplete="description"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-red-600">{formik.errors.description}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="imageUrl" className="sr-only">Image</label>
                <div {...getRootProps()} className="border-dashed border-2 p-2 text-center">
                  <input {...getInputProps()} />
                  {imageFile ? (
                    <p>{imageFile.name}</p>
                  ) : (
                    <p>Drag 'n' drop an image here, or click to select one</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <h1 className="text-gray-700 py-5">{message}</h1>
            </div>
          </form>
        </div>
      </div>

      {/* <MessageModal open={openModal} onClose={handleCloseModal} message={message} /> */}
    </>
  );
}

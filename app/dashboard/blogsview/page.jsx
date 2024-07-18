'use client';

import React, { useEffect, useState } from 'react';

export default function AllBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage

      if (!token) {
        setError('Authorization token is missing.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://giwost-server-production.up.railway.app/admin/blog', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        if (response.ok) {
          setBlogs(result.data);
        } else {
          setError(result.message || 'Failed to fetch blog posts.');
        }
      } catch (err) {
        setError('An error occurred while fetching the blog posts.');
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (!token) {
      setError('Authorization token is missing.');
      return;
    }

    try {
      const response = await fetch(`https://giwost-server-production.up.railway.app/admin/blog/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Blog post deleted successfully!');
        setBlogs(blogs.filter(blog => blog._id !== id));
      } else {
        setError(result.message || 'Failed to delete the blog post.');
      }
    } catch (err) {
      setError('An error occurred while deleting the blog post.');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-900">All Blog Posts</h2>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-600">{error}</div>
          ) : (
            <>
              {message && <div className="text-green-600">{message}</div>}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.map((blog) => (
                      <tr key={blog._id}>
                        <td className="px-6 py-4 whitespace-nowrap">{blog.topic}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{blog.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img src={blog.imageUrl} alt={blog.topic} className="w-16 h-16 object-cover" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{new Date(blog.createdAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{new Date(blog.updatedAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => deleteBlog(blog._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

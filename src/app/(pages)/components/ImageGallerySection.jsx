import React from 'react'
import { headers } from 'next/headers';

export default async function ImageGallerySection() {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/college`, { cache: 'no-store' });
  const result = await res.json();
  const colleges = result?.data || [];
  console.log('colleges :>> ', colleges);
  return (
    <div>
      <div className='flex items-center justify-between gap-4 w-full mb-4'>
        <h1 className='text-xl md:text-3xl font-semibold'>College Image Gallery</h1>
      </div>
      <div>
        {colleges.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <div key={college._id || college.name} className="border rounded-lg p-4 shadow">
                <h2 className="text-lg font-bold mb-2">{college.name}</h2>
                <div className="grid grid-cols-2 gap-2">
                  {college.graduateGallery && college.graduateGallery.length > 0 ? (
                    college.graduateGallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${college.name} graduate ${idx + 1}`}
                        className="w-full h-32 object-cover rounded"
                      />
                    ))
                  ) : (
                    <p className="col-span-2 text-gray-500 text-sm">No images available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No College Image Found</p>
        )}
      </div>
    </div>
  )
}

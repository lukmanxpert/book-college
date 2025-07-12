import { headers } from 'next/headers';
import CollegeCard from '../my-college/components/CollegeCard';
export default async function CollegePage() {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/college`, { cache: 'no-store' });
  const result = await res.json();
  const colleges = result?.data || [];


  return (
    <div>
      <h1 className='text-xl font-semibold'>All Colleges: {colleges.length}</h1>
      {colleges.length === 0 ? (
        <p>No college data found.</p>
      ) : (
        <div className='my-2 grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {colleges.map((college, idx) => (
            <CollegeCard key={idx} college={college} />
          ))}
        </div>
      )}
    </div>
  );
}

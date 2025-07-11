import { headers } from 'next/headers';
import CollegeCardHome from './CollegeCardHome';
import Search from './Search';
export default async function College() {
    const host = headers().get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/college`, { cache: 'no-store' });
    const result = await res.json();
    const colleges = result?.data || [];
    return (
        <div>
            <div className='flex justify-between gap-4'>
                <h1 className='text-xl md:text-3xl mb-4 font-semibold'>All Colleges: {colleges.length}</h1>
                <Search />
            </div>
            {colleges.length === 0 ? (
                <p>No college data found.</p>
            ) : (
                <div className='my-2 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {colleges.map((college, idx) => (
                        <CollegeCardHome key={idx} college={college} />
                    ))}
                </div>
            )}
        </div>
    );
}

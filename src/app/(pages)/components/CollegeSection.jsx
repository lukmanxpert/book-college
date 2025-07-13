import { headers } from 'next/headers';
import CollegeClient from './CollegeClient';
export default async function CollegeSection() {
    const host = headers().get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/college`, { cache: 'no-store' });
    const result = await res.json();
    const colleges = result?.data || [];
    return (
        <div>
            <CollegeClient data={colleges} />
        </div>
    );
}

import React from 'react'
import { headers } from 'next/headers';
import AdmissionForm from './components/AdmissionForm';
import { auth } from '@/lib/auth';

export default async function AdmissionPage() {
  const host = await headers().get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/college`, { cache: 'no-store' });
  const result = await res.json();
  const colleges = result?.data || [];
  const session = await auth()
  return (
    <div>
      <AdmissionForm colleges={colleges} user={session.user} />
    </div>
  )
}

import { auth } from '@/lib/auth'

import ProfileForm from './components/ProfileForm';


export default async function ProfilePage() {
    const session = await auth()
    console.log('session :>> ', session);
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center min-h-[calc(100vh-64px)]'>
                <ProfileForm user={session?.user} />
            </div>
        </div>
    )
}

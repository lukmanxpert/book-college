import { auth } from '@/lib/auth'

import SaveBtn from './components/SaveBtn';
import ProfileForm from './components/ProfileForm';


export default async function ProfilePage() {
    const session = await auth()
    console.log('session :>> ', session);
    return (
        <div>
            <div className='flex justify-center items-center min-h-[calc(100vh-64px)]'>
                <ProfileForm user={session?.user} />
            </div>
        </div>
    )
}

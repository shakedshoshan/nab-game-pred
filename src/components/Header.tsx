import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import { Button } from "@/components/ui/button";
import { currentUser } from '@clerk/nextjs/server';

const Header = async () => {
    const user = await currentUser()
    const firstName = user?.firstName
    const lastName = user?.lastName
    return (
        <div className='items-center py-6 px-6 flex flex-row space-x-4'>
            <ClerkProvider>
                <SignedIn >
                    <div><UserButton /></div>
                </SignedIn>
                <SignedOut>
                    <Button asChild>
                        <SignInButton />
                    </Button>
                </SignedOut>
                </ClerkProvider>

            <h1 className='text-1xl'>{firstName && lastName? `Hello, ${firstName} ${lastName}` : '' }</h1>
        </div>
            
    )
}

export default Header;


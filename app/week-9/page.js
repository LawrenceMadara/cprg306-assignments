"use client"
 
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"
 
 
export default function SignInPage(){
 
 
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
 
    async function HandleSignIn () {
        try {
            await gitHubSignIn()
        } catch (error) {
            console.log(error);
        }
       
    }
 
    async function HandleSignOut() {
        try{
            await firebaseSignOut();
        } catch(error){
            console.log(error)
        }
       
    }
 
    console.dir(user)
 
    return(
        <main>
            <header>
                <h1>Firebase Auth</h1>
            </header>
            {user ? (
                <section>
                    <div>
                        <p>Welcome {user.displayName}</p>
                        <p>{user.email}</p>
                        <img className="w-30 h-30" src={user.photoURL}></img>
                    </div>
                    <div>
                        <Link href={"/.week-9/protected"}></Link>
                    </div>
                    <div>
                        <button
                        className="text-lg bg-blue-600 text-white rounded-2xl px-2 py-1 mt-4"
                        onClick={HandleSignOut}
                        >
                            Sign out
 
                        </button>
                    </div>
 
                </section>
 
            ) : (
            <section>
                <button
                onClick={HandleSignIn}
                className="text-lg bg-blue-600 text-white rounded-2xl px-2 py-1 mt-4"
                type="button"> Sign in with GitHub</button>
            </section>
 
            )
            }
        </main>
    )
}
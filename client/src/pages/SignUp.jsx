import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
          <Link to={"/"} className=' font-bold dark:text-white text-4xl'>
            <span className='py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              {"Zaw Min Htut's"}
            </span>
            Blog
          </Link>
          <p className='mt-5 text-sm'>
            This is demo project. You can signup with your email and password or
            with Google
          </p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-5'>
            <div>
              <Label value='Username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>
            <Button type="submit" gradientDuoTone='purpleToPink'>Sign Up</Button>
          </form>
          <div className="mt-5 text-sm flex gap-2">
            <span>Have an account?</span>
            <Link to={'sign-in'} className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default SignUp;

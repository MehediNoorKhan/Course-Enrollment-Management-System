"use client";

import Link from 'next/link';
import React, { useEffect } from 'react'
import "../../../public/assets/css/soft-ui-dashboard.css";
import './style.css';
import { CreateUser } from '@/app/_lib/actions/UserUsecase';
import { useRouter } from 'next/navigation'

export default function SignUp() {

  const [error, setError] = React.useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target);

    const res = await CreateUser({
      name: formData.get('name'),
      dob: new Date(formData.get('dob')).toISOString(),
      gender: formData.get('gender'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (res.error) {
      console.error("Error creating user:", res.error);
      setError(res.error);
    } else {
      console.log("User created successfully:", res);
      router.push('/login');
    }
  }

  return (
    <main className="main-content  mt-0">
    <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div className="card card-plain mt-8">
                <div className="card-header pb-0 text-left bg-transparent">
                  <h3 className="font-weight-bolder text-purple">Welcome back</h3>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
                  <form role="form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" name="name" placeholder="Name" aria-label="Name" aria-describedby="name-addon"/>
                    </div>
                    <label>Date of Birth</label>
                    <div className="mb-3">
                      <input type="date" className="form-control" name="dob" placeholder="Dob" aria-label="Dob" aria-describedby="dob-addon"/>
                        </div>
                    <label>Gender</label>
                        <div className="mb-3">
                          {/* selection drop down gender option */}
                            <select id="gender" name="gender" className='form-control'>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">other</option>
                            </select>

                     </div>
                    <label>Email</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" name="email" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" name="password" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                    </div>
                    <label>Confirm Password</label>
                    <div className="mb-3">
                      <input type="password" className="form-control " name="confirm-password" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                    </div>
                    

                    {error && (

                    <div class="alert alert-primary  text-white" role="alert">
                      <strong>{error}</strong>
                    </div>
                    )}
                    <div className="text-center">
                      <button type="submit" className="btn btn-purple w-100 mt-4 mb-0">Register</button>
                    </div>

                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    {"Already have an account? "}
                    <Link href={"/login"} className="text-purple font-weight-bold">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </main>
  )
}

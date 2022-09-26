import {useState} from 'react'
import {http} from '../../utils/http'
import {login} from '../../utils/auth'

import {Button} from "../Button/Button"
import woman from '../../assets/woman.jpg'

export const LoginForm = () => {

  const [formInput, setFormInput] = useState({email: '', password: ''})

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    http().get('/sanctum/csrf-cookie').then(() => {
      http().post('/api/login', formInput).then(response => {
        if (response.data.error) {
          console.log(response.data.error)
        } else {
          const {user} = response.data
          login(user.email)
          window.location.replace('/')
        }
      })
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container px-7 mb-10 mx-auto">
        <div className="flex items-center justify-center px-20 text-center rounded-lg">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col md:flex-row w-full shadow-2xl">
              {/*Left*/}
              <div className="flex flex-col items-center justify-start min-h-full w-full pt-2 pl-5 pr-5 pb-5 rounded-t-lg md:w-3/5 md:rounded-tr-none md:rounded-l-lg">

                <div className="flex justify-start w-full">
                  <a href="/" className="text-sm italic font-regular text-green">Super Eureka</a>
                </div>

                <div className="flex flex-col justify-center items-center w-full min-h-full">
                  <h2 className="text-2xl font-bold text-green">Welcome back</h2>
                  <p className="text-xs text-green">Please enter your details</p>

                  <div className="mt-5 flex flex-col space-y-1 items-start">
                    <label htmlFor="email" className="text-xs">Email</label>
                    <input type="text" placeholder="Email" name="email" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>

                  <div className="mt-2 flex flex-col space-y-1 items-start">
                    <label htmlFor="password" className="text-xs">Password</label>
                    <input type="password" placeholder="Password" name="password" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>

                  <div className="mt-3 flex space-y-1 w-5/12 justify-end">
                    <p className="text-xs text-green">Forgot password</p>
                  </div>

                  <div className="mt-3 w-1/2 text-sm">
                    <button type="submit">Sign in</button>
                    {/* <Button link="/login" value="Sign in" roundness="lg" height="1" hidden={false} /> */}
                  </div>

                  <div className="mt-4 flex space-y-1 w-5/12 justify-center">
                    <a href="!#"><p className="text-xs text-green">Don't have an account ?  Sign up </p> </a>
                  </div>

                </div>
              </div>

              {/*Right*/}
              <div className="flex items-center justify-center w-full bg-blue bg-green rounded-b-lg md:rounded-bl-none md:rounded-r-lg md:w-2/5">
                <img src={woman} alt="woman" className="w-full h-full rounded-b-lg md:rounded-bl-none md:rounded-r-lg" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

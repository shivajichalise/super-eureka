import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {http} from '../../utils/http'
import {Button} from '../Button/Button'
import woman from '../../assets/woman.jpg'
import {useAuth} from '../../utils/useAuth'
import {Loader} from '../Loader/Loader'

export const RegisterForm = () => {

  const [isLoading, setIsLoading] = useState(false)

  const auth = useAuth()
  const navigate = useNavigate()

  const [formInput, setFormInput] = useState({name: '', email: '', password: '', password_confirmation: ''})

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // console.log(formInput)

    http().post('/api/register', formInput).then(response => {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        navigate('/login')
      }
    })
  }

  if (auth.user) {
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container px-7 mb-10 mx-auto">
        <div className="flex items-center justify-center px-20 text-center rounded-lg">
          <form onSubmit={submitHandler}>
            {isLoading && <Loader size={20} />}
            <div className="flex flex-col md:flex-row w-full shadow-2xl">
              {/*Left*/}
              <div className="flex flex-col items-center justify-start min-h-full w-full pt-2 pl-5 pr-5 pb-5 rounded-t-lg md:w-3/5 md:rounded-tr-none md:rounded-l-lg">

                <div className="flex justify-start w-full">
                  <a href="/" className="text-sm italic font-regular text-green">Super Eureka</a>
                </div>

                <div className="flex flex-col justify-center items-center w-full min-h-full">
                  <h2 className="text-2xl font-bold text-green">Welcome</h2>
                  <p className="text-xs text-green">Please enter your details</p>

                  <div className="mt-5 flex flex-col space-y-1 items-start">
                    <label htmlFor="name" className="text-xs">Name</label>
                    <input type="text" placeholder="Full name" name="name" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>

                  <div className="mt-2 flex flex-col space-y-1 items-start">
                    <label htmlFor="username" className="text-xs">Username</label>
                    <input type="text" placeholder="Username" name="username" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>

                  <div className="mt-2 flex flex-col space-y-1 items-start">
                    <label htmlFor="email" className="text-xs">Email</label>
                    <input type="text" placeholder="Email" name="email" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>

                  <div className="mt-2 flex flex-col space-y-1 items-start">
                    <label htmlFor="password" className="text-xs">Password</label>
                    <input type="password" placeholder="Password" name="password" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>


                  <div className="mt-2 flex flex-col space-y-1 items-start">
                    <label htmlFor="password" className="text-xs">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" name="password_confirmation" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" onChange={formInputHandler} />
                  </div>

                  <div className="mt-3 w-1/2 text-sm">
                    <Button value="Sign up" hidden={false} />
                  </div>

                  <div className="mt-4 flex space-y-1 w-5/12 justify-center">
                    <a href="/login"><p className="text-xs text-green">Already have an account ?  Sign in </p> </a>
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

import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '../Button/Button'
import {ArticleFormProps} from '../../constants/ArticleForm.model'
import {AiOutlineClose} from 'react-icons/ai'
import {http} from '../../utils/http'

export const ArticleForm = (props: ArticleFormProps) => {
  const {state, action, toggleModalHandler} = props


  const [formInput, setFormInput] = useState({title: '', description: ''})
  const navigate = useNavigate()

  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist()
    setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    // console.log(formInput)
    http().post('/api/articles', formInput).then(response => {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        window.location.reload()
      }
    })
  }

  if (!state) return null

  return (
    <div className="top-0 left-0 fixed h-screen w-screen bg-lightGray/80 z-[100]" onClick={toggleModalHandler}>
      <div className="flex h-screen w-screen justify-center items-center">
        <form className="flex flex-col items-center justify-center bg-gray shadow-2xl w-4/5 px-5 py-5 rounded-lg" onSubmit={submitHandler} onClick={e => e.stopPropagation()}>
          <div className="flex justify-end w-full">
            <button className="text-xl font-bold text-green" onClick={toggleModalHandler}>
              <AiOutlineClose />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-green">{action} an Article</h2>
          <p className="text-xs text-green">Please enter the detials</p>

          <div className="mt-5 flex flex-col space-y-1 items-start w-10/12">
            <label htmlFor="title" className="text-sm">Title</label>
            <input onChange={formInputHandler} type="text" placeholder="Article title" name="title" className="w-full border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 placeholder:text-sm text-lg transition
          ease-in-out" />
          </div>

          <div className="mt-2 flex flex-col space-y-1 items-start w-10/12">
            <label htmlFor="description" className="text-sm">Description</label>
            <textarea onChange={formInputHandler} placeholder="Description" rows={13} name="description" className="w-full border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 placeholder:text-sm text-lg transition
          ease-in-out" ></textarea>
          </div>

          <div className="mt-3 text-sm">
            <Button value={action === 'Edit' ? 'Update' : action} hidden={false} />
          </div>


        </form>
      </div>
    </div>
  )
}

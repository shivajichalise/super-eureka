import {AiOutlineClose} from 'react-icons/ai'
import {ConfirmationModalProps} from '../../constants/ConfirmationModal.model'
import {http} from '../../utils/http'

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {articleId, state, toggleModalHandler} = props

  const deleteHandler = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log(formInput)
    http().delete('/api/articles/' + articleId).then(response => {
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
        <form className="flex flex-col items-center justify-center bg-gray shadow-2xl w-2/5 px-5 py-5 rounded-lg" onSubmit={deleteHandler} onClick={e => e.stopPropagation()}>
          <div className="flex justify-end w-full">
            <button className="text-xl font-bold text-green" onClick={toggleModalHandler}>
              <AiOutlineClose />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-green">Are you sure ?</h2>
          <p className="text-xs text-green">It cannot be undone</p>

          <div className="flex w-full justify-center mt-3 space-x-10">
            <div className="mt-3 text-sm">
              <button type="submit" className="md:block p-2 px-6 text-white bg-red-700 rounded-2xl baseline hover:bg-lightGreen transition ease-in-out duration-200 w-full"> Yes </button>
            </div>

            <div className="mt-3 text-sm">
              <button className="md:block p-2 px-6 text-white bg-lightGray rounded-2xl baseline hover:bg-lightGreen transition ease-in-out duration-200 w-full" onClick={toggleModalHandler}> No </button>
            </div>
          </div>


        </form>
      </div>
    </div>
  )
}

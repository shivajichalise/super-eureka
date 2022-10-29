import {LoaderProps} from '../../constants/Loader.model'
import {ImSpinner9} from 'react-icons/im'

export const Loader = (props: LoaderProps) => {
  return (
    <div className="flex justify-center items-center">
      <ImSpinner9 size={props.size} className="animate-spin" />
    </div>
  )
}

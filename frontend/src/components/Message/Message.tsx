import {MessageProps} from '../../constants/Message.model'

export const Message = (props: MessageProps) => {
  const {message, type} = props
  let color = 'orange-300'

  color = (type === 'danger') ? 'bg-red-300'
    : (type === 'warn') ? 'bg-yellow-300'
      : (type === 'success') ? 'bg-lightGreen'
        : 'bg-indigo-300'

  return (
    <div className="container mx-auto px-7 mb-2 flex justify-center items-center">
      <div className={"rounded-lg p-2 " + color}>
        <h1>{message} </h1>
      </div>
    </div>
  )
}

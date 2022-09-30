import {ButtonProps} from '../../constants/Button.model'

export const Button = (props: ButtonProps) => {
  return (
    <button type="submit" className={(props.hidden ? "hidden " : '') + "md:block p-2 px-6 text-white bg-green rounded-2xl baseline hover:bg-lightGreen transition ease-in-out duration-200 w-full"}>
      {props.value}
    </button >
  )
}

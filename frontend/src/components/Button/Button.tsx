type ButtonProps = {
  value: string
  link: string
}

export const Button = (props: ButtonProps) => {
  return (
    <a href={props.link} className="hidden md:block p-3 px-6 text-white bg-green rounded-full baseline hover:bg-lightGreen">
      {props.value}
    </a>
  )
}

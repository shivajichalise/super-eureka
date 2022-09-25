type ButtonProps = {
  value: string
  link: string
  roundness: string
  height: string
  hidden: boolean
}

export const Button = (props: ButtonProps) => {
  return (
    <a href={props.link} className={(props.hidden ? "hidden " : '') + "md:block p-" + props.height + " px-6 text-white bg-green rounded-" + props.roundness + " baseline hover:bg-lightGreen transition ease-in-out duration-200"}>
      {props.value}
    </a >
  )
}

import {Content} from '../Content/Content'
import {Sidebar} from '../Sidebar/Sidebar'

export const Body = () => {
  return (
    <div className="container p-7 mx-auto flex justify-between mb-10">
      <Content />
      <Sidebar />
    </div>
  )
}

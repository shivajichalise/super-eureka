import {Content} from '../Content/Content'
import {Sidebar} from '../Sidebar/Sidebar'

export const Body = () => {
  return (
    <div className="flex justify-between">
      <Content />
      <Sidebar />
    </div>
  )
}

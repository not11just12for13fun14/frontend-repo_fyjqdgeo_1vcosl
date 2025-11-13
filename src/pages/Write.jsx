import Navbar from '../components/Navbar'
import WriteBlog from '../components/WriteBlog'

export default function Write(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Navbar />
      <WriteBlog />
    </div>
  )
}

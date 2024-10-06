import './App.scss'
import Dashboard from './Dashborad/Components/Dashboard'
import Login from './Login/Login'
import Register from './Register/Register'
// importing react router dom
import{
  createBrowserRouter,
  RouterProvider,
}from  'react-router-dom'
// Creation on f Router
const router= createBrowserRouter([
{
path:'/',
element:<div><Login/></div>
},
{
  path:'/Dashboard',
  element:<div><Dashboard/></div>
  },

  {
    path:'/Register',
    element:<div><Register/></div>
    }
])
function App() {
  return (
<div>
<RouterProvider router={router}/>
</div>    
  )
}
export default App

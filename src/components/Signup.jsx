import { CiUser } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";
import { TbPencilQuestion } from "react-icons/tb";


const Signup = () => {
  return (
    <div className='form-container'>
        <h2>Login</h2>
        <form>
        <div>
        <CiUser />
        <input type='text' placeholder='enter your email or user email' />
</div>
<div>
    <TbLockPassword />
    <input type="password" placeholder=' Enter your password' />

</div>
<button>Sign in </button>
</form>
<div>
  
<p>Don't have an account please sign up</p> 
  <TbPencilQuestion />


</div>
    </div>
  )
}

export default Signup
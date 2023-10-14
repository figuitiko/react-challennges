import { useState } from 'react'
interface IInputValue {
  value: string
  isValid: boolean
  isFirstTime: boolean
}
interface IFormState {
  firstName: IInputValue
  lastName: IInputValue
  emailAddress: IInputValue
  password: IInputValue
  confirmPassword: IInputValue
}
const initialState = {
  firstName: { value: '', isValid: false, isFirstTime: true },
  lastName: { value: '', isValid: false, isFirstTime: true },
  emailAddress: { value: '', isValid: false, isFirstTime: true },
  password: { value: '', isValid: false, isFirstTime: true },
  confirmPassword: { value: '', isValid: false, isFirstTime: true }
}

const SignUpForm: React.FC = () => {
  const [formState, setFormState] = useState<IFormState>(initialState)

  const { firstName, lastName, emailAddress, password, confirmPassword } = formState

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = { value: e.target.value, isValid: e.target.value.length > 0, isFirstTime: false }
    if (e.target.name === 'confirmPassword') {
      if (e.target.value === formState.password.value) {
        newValue.isValid = true
      } else {
        newValue.isValid = false
      }
    }
    if (e.target.name === 'emailAddress') {
      const emailRegex = /\S+@\S+\.\S+/
      if (emailRegex.test(e.target.value)) {
        newValue.isValid = true
      } else {
        newValue.isValid = false
      }
    }
    setFormState({
      ...formState,
      [e.target.name]: newValue
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log({ formState })
    e.preventDefault()
    setFormState({ ...initialState })
  }
  const isDisabled = (!emailAddress.isValid ||
    !firstName.isValid ||
    !emailAddress.isValid ||
    !password.isValid ||
    !confirmPassword.isValid)
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className='flex flex-col gap-4 w-1/2' onSubmit={handleSubmit} method='POST'>
        <div className='flex flex-col gap-2'>
          <input onChange={handleOnchange} className='py-2 px-4 border-2 rounded-lg' type='text' name='firstName' id='firstName' placeholder='First Name' value={firstName.value} />
          {
            (!firstName.isValid && !firstName.isFirstTime) && <span className='text-red-500'>Please enter a valid first name</span>
          }
        </div>
        <div className='flex flex-col gap-2'>
          <input onChange={handleOnchange} className='py-2 px-4 border-2 rounded-lg' type='text' name='lastName' id='lastName' placeholder='Last Name' value={lastName.value} />
          {
            (!lastName.isValid && !lastName.isFirstTime) && <span className='text-red-500'>Please enter a valid last name</span>
          }
        </div>
        <div className='flex flex-col gap-2'>
          <input onChange={handleOnchange} className='py-2 px-4 border-2 rounded-lg' type='email' name='emailAddress' id='emailAddress' placeholder='Email Address' value={emailAddress.value} />
          {
            (!emailAddress.isValid && !emailAddress.isFirstTime) && <span className='text-red-500'>Please enter a valid email address</span>
          }
        </div>
        <div className='flex flex-col gap-2'>
          <input onChange={handleOnchange} className='py-2 px-4 border-2 rounded-lg' type='password' name='password' id='password' placeholder='password' value={password.value} />
          {
            (!password.isValid && !password.isFirstTime) && <span className='text-red-500'>Please enter a valid password</span>
          }
        </div>
        <div className='flex flex-col gap-2'>
          <input onChange={handleOnchange} className='py-2 px-4 border-2 rounded-lg' type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' value={confirmPassword.value} />
          {
            (!confirmPassword.isValid && !confirmPassword.isFirstTime) && <span className='text-red-500'>Please enter a valid password</span>
          }
        </div>
        <div className='flex w-full justify-end'>
          <button type='submit' className='border-2 border-black hover:bg-slate-500 hover:text-white' disabled = {isDisabled}>
            submit
          </button>
        </div>
      </form>
      <pre className='w-1/2 bg-slate-400 border-2 rounded-lg border-black p-8 flex justify-center mt-4'>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </div>
  )
}

export default SignUpForm

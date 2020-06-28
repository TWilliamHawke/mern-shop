import { useSelector, useDispatch } from "react-redux"
import { AppState } from '../../../redux/store'
import { AuthState } from "../../../redux/authReducer/authReducer"
import { useHistory, useRouteMatch } from "react-router-dom"
import { useEffect, useState, ChangeEvent, FormEvent } from "react"
import { redirectSuccess, hideSuccessMessage } from "../../../redux/authReducer/actions"
import { authValidator } from '../../../utils/authValidation'
import { loginUser, createUser } from "../../../redux/authSaga/actions"
import { AuthFetchActionTypes } from "../../../redux/authReducer/types"
import { ErrorOutputType } from "src/types/authDataTypes"

type UseAuthDataType = {
  inputHandle: (e: ChangeEvent<HTMLInputElement>) => void
  radioHandle: () => void
  errors: ErrorOutputType
  hideSuccessMessage: () => AuthFetchActionTypes
  submitHandle: (e: FormEvent) => void
  isEmail: boolean,
  disableFetch: boolean,
  formValues: Record<string, string>
  successMessage: boolean
}

export const useAuthData = (header: string): UseAuthDataType => {
  const [isEmail, setIsEmail] = useState(true)
  const [formValues, setFormValues] = useState({
    phone: '+7(999)-999-99-99',
    email: '',
    userName: '',
    password: 'qwerty'
  })
    

  const {loading, successMessage, allowRedirect, errors
  } = useSelector<AppState, AuthState>(store => store.auth)

  const history = useHistory()
  const { path } = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!allowRedirect) return
    history.push('/login')
    dispatch(redirectSuccess())
    // eslint-disable-next-line
  }, [allowRedirect, path])

  useEffect (() => {
    return () => {
      if(path !== '/login' || !successMessage) return
      dispatch(hideSuccessMessage())
    }
  // eslint-disable-next-line
  }, [dispatch, path])
  
  const disableFetch = authValidator({loading, path, ...formValues})

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.target

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const radioHandle = () => {
    setFormValues({
      ...formValues,
      email: isEmail ? 'test@mail.com' : '',
      phone: !isEmail ? '+7(999)-999-99-99' : ''
    })
    setIsEmail(isEmail => !isEmail)
  }

  const submitHandle = (e: FormEvent) => {
    e.preventDefault()
    if(disableFetch) return
    if (header === 'Login') {
      dispatch(loginUser({...formValues, isEmail}))
    } else {
      dispatch(createUser({...formValues, isEmail}))
    }
  }


  return {
    inputHandle,
    radioHandle,
    errors,
    hideSuccessMessage: () => dispatch(hideSuccessMessage()),
    submitHandle,
    isEmail,
    disableFetch,
    formValues,
    successMessage
  }
}
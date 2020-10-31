import * as yup from 'yup'

export const password = yup
  .string()
  .matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Password must be at least 8 characters long and contain numbers and letters in upper and lower case',
  )

export const nickname = yup
  .string()
  .matches(
    /^(?!\._)(?!_\.)(?!.*__)(?!_)(?!.*_$)(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9._]{5,69}$/,
    'Nickname may contain latin letters, numbers, alone dots and underscores and must contains from 5 to 70 symbols',
  )

export const email = yup.string().email()

export const login = yup
  .string()
  .or([nickname, email], 'Login must be valid email or nickname')

export const avatar = yup.string().url()

export const birthday = yup.mixed().test({
  name: 'birthday',
  test: value => !value || yup.date().isValidSync(value),
  message: 'Birthday should be a valid date or empty string',
})

export const from = yup.string().max(36)

export const about = yup.string().max(120)

export const description = yup.object().shape({birthday, from, about})

export const text = yup.string().max(120)

export const token = yup.string().length(36)

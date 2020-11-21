import * as yup from 'yup'

yup.addMethod(yup.string, 'or', function (schemas, msg) {
  return (this as any).test({
    name: 'or',
    message: msg || 'Please enter valid url or email',
    test: (value: string) => {
      if (Array.isArray(schemas) && schemas.length > 1) {
        const resee = schemas.map(schema => schema.isValidSync(value))
        return resee.some(res => res)
      } else throw new TypeError('Schemas is not correct array schema')
    },
    exclusive: false,
  })
})

const required = yup.string.prototype.required

yup.addMethod(yup.string, 'required', function (_, msg) {
  return required.call(this, msg || 'It is a required field')
})

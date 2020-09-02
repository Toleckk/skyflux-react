import * as yup from 'yup'

yup.addMethod(yup.string, 'or', function (schemas, msg) {
  return this.test({
    name: 'or',
    message: msg || 'Please enter valid url or email',
    test: value => {
      if (Array.isArray(schemas) && schemas.length > 1) {
        const resee = schemas.map(schema => schema.isValidSync(value))
        return resee.some(res => res)
      } else throw new TypeError('Schemas is not correct array schema')
    },
    exclusive: false,
  })
})

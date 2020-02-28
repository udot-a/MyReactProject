export const required = value =>  value ? undefined : 'Field is required...'

export const maxLengthCreator= maxLength  => value =>
value&&value.length <= maxLength ? undefined : 'Max length 30 symbols...'

export const minLengthCreator = minLength => value =>
    value&&value.length >= minLength ? undefined : 'Min length 10 symbols...'

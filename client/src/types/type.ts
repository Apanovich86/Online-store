export default interface IUser {
    id?: any | null,
    name: string,
    surname: string,
    email: string,
    password: string,
    roles?: Array<string>
}

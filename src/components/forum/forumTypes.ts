export type Messages = {
    id: number,
    value: string,
    author: string,
    date_create: Date
}

export type Elem = {
    id: string,
    name: string,
    name_translit: string,
    value: string,
    create: string,
    date_create: string,
    messages: Messages[] | []

}
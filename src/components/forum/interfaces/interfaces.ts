interface MessageForum{
    id: number,
    author: string,
    value: string,
    date_create: number
}
interface mainThemeTemplate {
    id: string,
    name: string,
    name_translit: string,
    allowNesting: boolean,
    allowComment: boolean,
    value: string,
    create: string,
    date_create: string
}


interface NestedForumTheme extends mainThemeTemplate {
    messages: MessageForum[]
}




interface ForumTheme extends mainThemeTemplate {
    themes: NestedForumTheme[]
}
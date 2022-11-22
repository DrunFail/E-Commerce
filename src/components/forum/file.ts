import forum from '../../data/forum.json';




export const mainTheme = forum.map(elem => {
   return  {
        id: elem.id,
         name: elem.name,
         name_translit: elem.name_translit
        
}
})

export function findTheme(id: string): ForumTheme {
    const find = forum.find(elem => elem.name_translit === id)
    if (find === undefined) {
        throw new Error('')
    }
    return find
}

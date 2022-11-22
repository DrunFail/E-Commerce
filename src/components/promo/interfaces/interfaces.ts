interface Promo {
    id: string,
    name: string,
   translit: string,
    value: string,
    validity: {
        start: string,
        end: string
    }
}
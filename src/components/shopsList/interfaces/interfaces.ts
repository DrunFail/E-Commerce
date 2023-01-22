export interface ShopAddress {
    city: string,
    street: string,
    dom: string,
    korpus: string | null
}

export interface WorkHours {
    start: string,
    obed: {
        start: string,
        end: string
    },
    end: string
}

export interface Shop {
    id: number,
    name: string,
    address: ShopAddress,
    work_hours:WorkHours,
    phone: string
}
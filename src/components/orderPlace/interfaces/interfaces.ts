export interface ContactsData {
    name: string,
    last_name: string,
    phone: string,
    email: string
}

export interface DeliveryData {
    delivery_method: string,
    delivery_shop: string,
    city: string,
    street: string,
    home: string,
    home2: string,
    home3: string
}

export interface OrderItem {
    id: string,
    title: string,
    count: number,
    price: number
}




export interface OrderData extends ContactsData,DeliveryData, OrderItem {
    payment: string
}
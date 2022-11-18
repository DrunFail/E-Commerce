interface Properties {
    id: number,
    name: string,
    value: string,
    nameDescription: string | null,
    valueDescription: string | null,
    priority: number,
    measure: string | null,
    iconPath: string | null
}


interface KeyProperties {
    name: string,
    priority: number,
    properties: Properties[]
}

interface AllProperties {
    name: string,
    priority: number,
    properties: Properties[]
}

interface Product {
    body: {
        price: string,
        name: string,
        imagesBig: string[],
        properties: {
            key: KeyProperties[],
            all: AllProperties[]
        }
    }
}
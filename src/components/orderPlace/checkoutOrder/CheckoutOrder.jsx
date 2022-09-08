export default function CheckoutOrder({ contacts, payment, delivery }) {


    return (
        <div>
            <div>
                <h3>contacts</h3>
                
                <p>name {contacts.name}</p>
                <p>surname {contacts.last_name}</p>
                <p>tel {contacts.phone}</p>
                <p>email {contacts.email}</p>
            </div>
            <div>
                <h3>payment</h3>
                <p>name {contacts.name}</p>
            </div>
            <div>
                <h3>payment</h3>
                <p>name {payment}</p>
            </div>
            <div>
                <h3>delivery</h3>
                <p>name {delivery.delivery_method}</p>
                <p>shop {delivery. delivery_shop }</p>
            </div>
        </div>
    );
}
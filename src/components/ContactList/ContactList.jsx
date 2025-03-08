import Contact from '../Contact/Contact'

const ContactList = ({ contacts }) => {

    return (
        <div>
            {contacts.length > 0 ? (
                contacts.map(({ id, name, number }) => (
                    <Contact key={id} name={name} number={number} />))) : (
                <p>No contacts found</p>
            )}
        </div>
    );
};

export default ContactList;



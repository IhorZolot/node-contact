import * as contactList from './contacts.js'
// const argv = require('yargs').argv

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case 'list':
			const allContacts = await contactList.listContacts()
			return console.log(allContacts)
		case 'get':
			const oneContact = await contactList.getContactById(id)
			return console.log(oneContact)
		case 'add':
			const addContact = await contactList.addNewContact({ name, email, phone })
			return console.log(addContact)
		case 'remove':
			const removeContact = await contactList.removeContactById(id)
			return console.log(removeContact)
		case 'update':
			const updateContact = await contactList.updateAllContact(id, { name, email, phone })
			return console.log(updateContact)
		default:
			console.warn('\x1B[31m Unknown action type!')
	}
}

// invokeAction({ action: 'list' })
// invokeAction({ action: 'get', id: 'qdggE76Jtbfd9eWJHrssH' })
// invokeAction({ action: 'add', name: 'Chaim Lewis', email: 'dui.in@egetlacus.ca', phone: '(294) 840-6685' })
// invokeAction({
// 	action: 'update',
// 	id: 'MjmAJNcygsWywfDlITXbJ',
// 	name: 'Chaim Lewis',
// 	email: 'dui.in@egetlacus.ca',
// 	phone: '(294) 840-2222',
// })
invokeAction({
	action: 'remove',
	id: 'l969A7ubrNEvY09P7ZPxv',
})
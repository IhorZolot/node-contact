import { program } from 'commander'
import * as contactList from './contacts.js'

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

program
	.option('-a, --action <type>', 'choose action')
	.option('-i, --id <type>', 'user id')
	.option('-n, --name <type>', 'user name')
	.option('-e, --email <type>', 'user email')
	.option('-p, --phone <type>', 'user phone')

program.parse()
const options = program.opts()
invokeAction(options)

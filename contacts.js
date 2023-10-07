import fs from 'fs/promises'
import path from 'path'
import { nanoid } from 'nanoid'

const contactsPath = path.resolve('db', 'contacts.json')
const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

export const listContacts = async () => {
	const data = await fs.readFile(contactsPath, 'utf-8')
	return JSON.parse(data)
}
export const getContactById = async id => {
	const contacts = await listContacts()
	const getContact = contacts.find(item => item.id === id)
	return getContact || null
}
export const addNewContact = async data => {
	const contacts = await listContacts()
	const newContact = {
		id: nanoid(),
		...data,
	}
	contacts.push(newContact)
	await updateContacts(contacts)
	return newContact
}

export const removeContactById = async id => {
	const contacts = await listContacts()
	const index = contacts.findIndex(item => item.id === id)
	if (index === -1) {
		return null
	}
	const [result] = contacts.splice(index, 1)
	await updateContacts(contacts)
	return result
}

export const updateAllContact = async (id, data) => {
	const contacts = await listContacts()
	const index = contacts.findIndex(item => item.id === id)
	if (index === -1) {
		return null
	}
	contacts[index] = { id, ...data }
	await updateContacts(contacts)
	return contacts[index]
}

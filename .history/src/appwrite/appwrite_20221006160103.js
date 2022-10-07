import { Client, Account, Databases } from 'appwrite'

const client = new Client()
client.setEndpoint('').se
const account = new Account(client)
const database = new Databases(client, '')

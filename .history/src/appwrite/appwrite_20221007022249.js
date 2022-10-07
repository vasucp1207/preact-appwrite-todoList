import { Client, Account, Databases } from 'appwrite'

const client = new Client()
client.setEndpoint('http://localhost/v1').setProject('')

const account = new Account(client)
const database = new Databases(client, '')

module.exports = {
    client,
    account,
    database
}
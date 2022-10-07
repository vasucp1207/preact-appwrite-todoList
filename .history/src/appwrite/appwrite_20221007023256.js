import { Client, Account, Databases } from 'appwrite'

const client = new Client()
client.setEndpoint('http://localhost/v1').setProject('633f3ffe8a0ed299298f')

const account = new Account(client)
const database = new Databases(client, '633f403dcda63e88b76c')

export {
    client,
    account,
    database
}
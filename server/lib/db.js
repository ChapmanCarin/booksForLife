const { Database, aql } = require('arangojs')

const db = new Database({
  databaseName: 'booksForLife',
  auth: { username: 'root', password: 'bfl' },
})

const bookstoreOwners = db.collection('bookstoreOwners')

async function main() {
  try {
    const bookstoreOwners = await db.query(aql`
      FOR bookstoreOwner IN bookstoreOwners
      RETURN bookstoreOwner
    `)
    console.log('My bookstoreOwners, let me show you them:')
    for await (const bookstoreOwner of bookstoreOwners) {
      console.log(bookstoreOwner.name)
    }
  } catch (err) {
    console.error(err.message)
  }
}

main()

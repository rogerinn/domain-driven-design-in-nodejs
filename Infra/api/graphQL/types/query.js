const gql = require('apollo-server').gql

const definitions = `
  type Query {
    "Retorna uma lista de endereços"
    addresses(
      "Identificador do endereço no sistema (filtro opcional)"
      id: Int
    ): [Address]
  }
`

module.exports = gql(definitions)

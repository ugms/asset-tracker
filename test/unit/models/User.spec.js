/*
Built-In Tests

checkHookDefined: Checks that a particular hook is defined.
checkModelName: Checks that the model is named correctly.
checkNonUniqueIndex: Checks that a specific non-unique index is defined.
checkPropertyExists: Checks that the model has defined the given property.
checkUniqueCompoundIndex: Checks that a specific unique compound index is defined.
checkUniqueIndex: Checks that a specific unique index is defined.

*/


const { expect } = require('chai')

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists
} = require('sequelize-test-helpers')

const UserModel = require('../../../server/models/user')

describe('server/models/User', () => {
  const User = UserModel(sequelize, dataTypes)
  const user = new User()

  checkModelName(User)('User')

  context('properties', () => {
    ;['username', 'password'].forEach(
      checkPropertyExists(user)
    )
  })

  context('indexes', () => {
    ;['username'].forEach(checkUniqueIndex(user))
  })
})

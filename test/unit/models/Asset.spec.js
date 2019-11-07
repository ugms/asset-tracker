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

const AssetModel = require('../../../server/models/asset')

describe('server/models/Asset', () => {
  const Asset = AssetModel(sequelize, dataTypes)
  const asset = new Asset()

  checkModelName(Asset)('Asset')

  context('properties', () => {
    ;['chassie', 'current_user', 'previous_user', 'name2', 'manufacturer',
    'model', 'os', 'serial_number', 'purchase_date', 'notes'].forEach(
      checkPropertyExists(user)
    )
  })

  context('indexes', () => {
    ;['serial_number'].forEach(checkUniqueIndex(user))
  })
})

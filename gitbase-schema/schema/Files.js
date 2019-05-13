cube(`Files`, {
  sql: `SELECT * FROM gitbase.files`,
  
  joins: {
    Repositories: {
      sql: `${CUBE}.repository_id = ${Repositories}.repository_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [repositoryId]
    }
  },
  
  dimensions: {
    repositoryId: {
      sql: `repository_id`,
      type: `string`,
      primaryKey: true
    },
    repositoryId2: {
      sql: `repository_id`,
      type: `string`,
    },
    filePath: {
      sql: `file_path`,
      type: `string`
    },
    
    blobHash: {
      sql: `blob_hash`,
      type: `string`
    },
    
    treeHash: {
      sql: `tree_hash`,
      type: `string`
    },
    
    treeEntryMode: {
      sql: `tree_entry_mode`,
      type: `string`
    },
    
    blobContent: {
      sql: `blob_content`,
      type: `string`
    }
  }
});

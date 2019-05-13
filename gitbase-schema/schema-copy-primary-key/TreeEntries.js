cube(`TreeEntries`, {
  sql: `SELECT * FROM gitbase.tree_entries`,
  
  joins: {
    Repositories: {
      sql: `${CUBE}.repository_id = ${Repositories}.repository_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [repositoryId, treeEntryName]
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
    treeEntryName: {
      sql: `tree_entry_name`,
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
    }
  }
});

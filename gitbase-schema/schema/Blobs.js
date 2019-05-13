cube(`Blobs`, {
  sql: `SELECT * FROM gitbase.blobs`,
  
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
    
    blobHash: {
      sql: `blob_hash`,
      type: `string`
    },
    
    blobContent: {
      sql: `blob_content`,
      type: `string`
    }
  }
});

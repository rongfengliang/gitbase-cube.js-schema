cube(`CommitBlobs`, {
  sql: `SELECT * FROM gitbase.commit_blobs`,
  
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
    
    commitHash: {
      sql: `commit_hash`,
      type: `string`
    },
    
    blobHash: {
      sql: `blob_hash`,
      type: `string`
    }
  }
});

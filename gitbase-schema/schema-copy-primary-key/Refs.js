cube(`Refs`, {
  sql: `SELECT * FROM gitbase.refs`,
  
  joins: {
    Repositories: {
      sql: `${CUBE}.repository_id = ${Repositories}.repository_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [repositoryId, refName]
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
    refName: {
      sql: `ref_name`,
      type: `string`
    },
    
    commitHash: {
      sql: `commit_hash`,
      type: `string`
    }
  }
});

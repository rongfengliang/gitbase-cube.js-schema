cube(`CommitTrees`, {
  sql: `SELECT * FROM gitbase.commit_trees`,
  
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
    
    treeHash: {
      sql: `tree_hash`,
      type: `string`
    }
  }
});

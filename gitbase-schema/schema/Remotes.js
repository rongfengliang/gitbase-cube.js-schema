cube(`Remotes`, {
  sql: `SELECT * FROM gitbase.remotes`,
  
  joins: {
    Repositories: {
      sql: `${CUBE}.repository_id = ${Repositories}.repository_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [repositoryId, remoteName]
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
    remoteName: {
      sql: `remote_name`,
      type: `string`
    },
    
    remotePushUrl: {
      sql: `remote_push_url`,
      type: `string`
    },
    
    remoteFetchUrl: {
      sql: `remote_fetch_url`,
      type: `string`
    },
    
    remotePushRefspec: {
      sql: `remote_push_refspec`,
      type: `string`
    },
    
    remoteFetchRefspec: {
      sql: `remote_fetch_refspec`,
      type: `string`
    }
  }
});

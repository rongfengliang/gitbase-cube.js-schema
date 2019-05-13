cube(`Commits`, {
  sql: `SELECT * FROM gitbase.commits`,
  
  joins: {
    Repositories: {
      sql: `${CUBE}.repository_id = ${Repositories}.repository_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [committerName, repositoryId, commitAuthorName]
    }
  },
  
  dimensions: {
    committerName: {
      sql: `committer_name`,
      type: `string`
    },
    
    repositoryId: {
      sql: `repository_id`,
      type: `string`,
      primaryKey: true
    },
    repositoryId2: {
      sql: `repository_id`,
      type: `string`,
    },
    commitAuthorName: {
      sql: `commit_author_name`,
      type: `string`
    },
    
    commitAuthorEmail: {
      sql: `commit_author_email`,
      type: `string`
    },
    
    commitHash: {
      sql: `commit_hash`,
      type: `string`
    },
    
    committerEmail: {
      sql: `committer_email`,
      type: `string`
    },
    
    commitMessage: {
      sql: `commit_message`,
      type: `string`
    },
    
    treeHash: {
      sql: `tree_hash`,
      type: `string`
    },
    
    commitParents: {
      sql: `commit_parents`,
      type: `string`
    },
    
    commitAuthorWhen: {
      sql: `commit_author_when`,
      type: `time`
    },
    
    committerWhen: {
      sql: `committer_when`,
      type: `time`
    }
  }
});

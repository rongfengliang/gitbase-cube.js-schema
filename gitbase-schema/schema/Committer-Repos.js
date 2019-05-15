cube(`CommitterRepos`, {
    sql: `SELECT
    SUM(JSON_EXTRACT(LOC(file_path, blob_content), '$.code')) as code,
    SUM(JSON_EXTRACT(LOC(file_path, blob_content), '$.comment')) as comments,
    SUM(JSON_EXTRACT(LOC(file_path, blob_content), '$.blank')) as blanks,
    COUNT(1) as files,
    commit_author_email,
    repository_id
FROM commit_files
NATURAL JOIN refs
NATURAL JOIN blobs
NATURAL JOIN commits
WHERE ref_name='HEAD'
GROUP BY repository_id,commit_author_email`,
    dimensions: {
      repositoryId: {
        sql: `repository_id`,
        type: `string`,
        primaryKey: true
      },
      repositoryId2: {
        sql: `repository_id`,
        type: `string`
      },
      commit_author_email: {
        sql: `commit_author_email`,
        type: `string`,
      },
      files: {
        sql: `files`,
        type: `string`
      },
      
      blanks: {
        sql: `blanks`,
        type: `string`
      },
      comments: {
        sql: `comments`,
        type: `string`
      },
      code: {
        sql: `code`,
        type: `string`
      }
    }
  });
  
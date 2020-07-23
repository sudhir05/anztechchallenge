Running API locally
-------------------------
clone api locally - `https://github.com/sudhir05/anztechchallenge.git`
run api locally without an image- `npm start run`
port 3000 will be opened, hit url http://localhost:3000/version
sample response would show latest api version, last commit and description.

```
{
   "myapplication":[
      {
         "apiVersion":"1.0.0",
         "lastcommitsha":"43b4142590dd0ce629a38b4519b86d2de717933f",
         "description":"pre-interview technical test"
      }
   ]
}
```

To run test cases 
----------------------------------------------
Run `npm test`

To check for any none vulnerabilities

Run `npm audit`

To build docker image
----------------------
This API can be containerised using Dockerfile (Note : In order to run into local, docker setup should be present)

Build docker image - `docker build  -t techanz .`
Run docker image - `docker run -d -p 3000:3000 techanz`

Port 3000 will be opened and you can hit the service using url http://localhost:3000/version

Build pipeline
----------------
Build pipeline has been created using travis-ci.
Build will automatically start when any changes pushed in github.
Build logs will display sonarQube code quality results and test case results.
`.travis.yml` is having all the configuration.
`sonar-project.properties` is having repository details for scanning.
Sample sonarQube report can be seen https://sonarcloud.io/dashboard?id=sudhir05_anztechchallenge


What could still be done
---------------------------------



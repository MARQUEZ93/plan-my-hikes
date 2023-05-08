# [Plan My Hikes](https://www.planmyhikes.com)

<p align="center"><img src="https://i.imgur.com/Im7naBI.png" width="800px"/></p>

### About

I have been using Chat GPT when planning logistics for hiking national parks. Since national parks don't change much, I query'd & saved hiking advice from Chat GPT for over 100+ national parks around the world. 

### [OpenAI Documentation](backend/template/README.md)

I wrote [documentation](backend/template/README.md) to query OpenAI & save results to JSON, CSV, and Postgres DB. The model I queried was [Chat GPT 3.5](https://platform.openai.com/docs/models/gpt-3-5)

### Deployment

#### GitHub Actions + AWS Elastic Beanstalk + Docker

Deploy occurs on every merged pull request on the main branch. I send my zipped docker-compose.yml file to AWS & it pulls down my public Docker images. 

#### Nginx
1) I added a Nginx server to my React Frontend Container. This listens on port 3000 & serves production assets from npm run build. 

2) I forced HTTPS over HTTP in my default.conf 

### Commands

##### Build multi-container application locally
`docker compose -f docker-compose-dev.yml up --build`

##### SSH onto EC2 instance

ssh - ./Path/To/EC2/SSH/Key/Pair ec2-user@{Your_EC2_Public_IPv4_DNS_Here}

##### Drop DB

docker exec -it {backend_container_name_here} node seed/drop.js

##### Seed DB (reads from ./data/json/parks.json file that contains saved Chat GPT responses)

docker exec -it {backend_container_name_here} node seed/seed.js

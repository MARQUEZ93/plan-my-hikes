# [Plan My Hikes](https://www.planmyhikes.com)

<p align="center"><img src="https://i.imgur.com/Im7naBI.png" width="800px"/></p>

## About

I have been using Chat GPT when planning logistics for hiking national parks. Since national parks don't change much, I query'd & saved hiking advice from Chat GPT for over 100+ national parks around the world. 

## OpenAI

### ChatGPT 3.5

## Tech Stack + Deployment

### GitHub Actions

### AWS Elastic Beanstalk

### Nginx

### Docker

### React

### Postgres

### Express

## Commands

### Build multi-container application locally
`docker compose -f docker-compose-dev.yml up --build`

### SSH onto EC2 instance

ssh - ./Path/To/EC2/SSH/Key/Pair ec2-user@{Your_EC2_Public_IPv4_DNS_Here}

### Drop DB

docker exec -it {backend_container_name_here} node seed/drop.js

### Seed DB (reads from ./data/json/parks.json file that contains saved Chat GPT responses)

docker exec -it {backend_container_name_here} node seed/seed.js

###  
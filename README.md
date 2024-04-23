# cpsy-300-final-exam-docker-challenge

## Introduction to repository
This repository provides a comprehensive guide and resources for completing four Docker challenges. The challenges are designed to help users gain practical experience with Docker, a popular platform used for containerization. The repository includes detailed instructions for setting up the necessary tools, creating Dockerfiles, and running Docker containers to serve static webpages, Node.js applications, and full-stack applications with databases.

## Learning experience and findings
Throughout the process of completing these challenges, I came away with several key findings:

- **Docker Basics**: The first challenge introduced the fundamental concepts of Docker, including the creation of Dockerfiles and the building of Docker images. This was a foundational step in understanding how Docker can be used to containerize applications.

- **Serving Static Webpages**: The first challenge demonstrated how Docker can be used to serve static webpages. This involved creating a simple HTML file and using Nginx as a web server within a Docker container. This experience highlighted the versatility of Docker in serving various types of content.

- **Node.js Application Containerization**: The second challenge focused on containerizing a Node.js application. This involved creating a Dockerfile for the Node.js server and using Docker Compose to manage the orchestration of the web server and the Node.js application. This challenge provided insights into how Docker can be used to containerize more complex applications and manage multi-container applications.

- **Full Stack Application with Database**: Challenge 3 introduced the concept of integrating a database into a Dockerized application. This challenge required understanding how to connect different components (services) and present environment variables in the application’s configuration. It involved creating a `docker-compose.yml` file with web server, application, and database services working together. This experience deepened the understanding of Docker Compose and its role in managing multi-container applications with external dependencies like databases.

- **Scaling Applications**: Challenge 4 focused on scaling a service from 1 to 3 instances. This challenge was particularly enlightening as it demonstrated the benefits of having more instances running instead of only one, such as improved load distribution, resilience, and redundancy. It also highlighted the ease of scaling with Docker Compose, making it a powerful tool for managing application services.

- **Practical Application**: All challenges provided practical applications of Docker, from serving a simple webpage to orchestrating a web server and a Node.js API server, and scaling a service. This hands-on experience was invaluable in understanding the real-world applications of Docker and its role in modern software development practices.

Together, these challenges can provide challengers with a solid foundation of Docker. Personally, I found that completing these practical challenges was fun and helpful in understanding how Docker can be used to containerize applications, manage multi-container applications, and scale services to meet demand.

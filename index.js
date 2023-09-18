const express = require('express');
const app = express();
const port = 3000;

// Sample data (replace this with your actual data from a database or API)
const tableData = [
  { id: 1, term: 'Continuous Integration (CI)', description: 'Continuous Integration is a development approach that automates testing and merging code changes into the central repository throughout the day. This practice detects and resolves integration problems at an early stage, making our development process much smoother.', references: 'Atlassian (2019). What is Continuous Integration | Atlassian. [online] Atlassian. Available at: https://www.atlassian.com/continuous-delivery/continuous-integration.' },

  { id: 2, term: 'Version Control System', description: 'It is a tool to allow developers to track and visualise and manage their changes in the source code. It allows developers to check the history of their changes and solve mnerge conflicts', references: 'Atlassian. (2019). What is version control. Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control' },

  { id: 3, term: 'Continuous Delivery (CD)', description: 'It is a process of deployment of the source code from the staging to production using automated testing. This ensures faster and more reliable deployments.', references: 'Amazon Web Services, Inc. (n.d.). What is Continuous Delivery? – Amazon Web Services. [online] Available at: https://aws.amazon.com/devops/continuous-delivery/#:~:text=Continuous%20delivery%20is%20a%20software [Accessed 23 Jul. 2023].' },

  { id: 4, term: 'Infrastructure as Code', description: 'It is a practice of managing and provisoning infrastructure resources using scripts and code. It helps in easy way to implement consistency and repeatability.' , references: 'Wikipedia. (2021). Infrastructure as code. [online] Available at: https://en.wikipedia.org/wiki/Infrastructure_as_code.' },

  { id: 5, term: 'Microservices', description: 'Microservices is a design pattern that involves breaking down an application into discrete, autonomous services, which interact with each other through APIs. This approach offers several benefits, including enhanced flexibility, improved scalability, and simplified maintenance for intricate systems.', references: 'microservices.io. (n.d.). What are microservices? [online] Available at: https://microservices.io.' },

  { id: 6, term: 'DevOps Culture:', description: 'DevOps Culture denotes a collaborative and harmonious method that fosters effective teamwork between development and operations teams. This culture places significant emphasis on open communication, shared accountabilities, and a strong commitment to delivering high-quality software products.', references: 'Atlassian (n.d.). DevOps Culture. [online] Atlassian. Available at: https://www.atlassian.com/devops/what-is-devops/devops-culture#:~:text=DevOps%20is%20an%20organizational%20culture [Accessed 23 Jul. 2023].' },

  { id: 7, term: 'Scalability', description: 'Scalability is the ability of an application or infrastructure to handle an increasing workload without a significant drop in performance. In DevOps, scalable systems are crucial to accommodate growth and sudden spikes in demand.', references: 'Atlassian. (2019). What is version control. Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control' },

  { id: 8, term: 'Agile Development', description: 'Agile Development is a dynamic and incremental software development methodology that prioritizes adaptability, teamwork, and constant input from customers. It synergizes seamlessly with DevOps principles, facilitating swift and uninterrupted delivery of customer value.', references: 'Atlassian (2019). Agile best practices and tutorials | Atlassian. [online] Atlassian. Available at: https://www.atlassian.com/agile.' },

  { id: 9, term: 'Infrastructure Orchestration', description: 'Infrastructure Orchestration entails the automated control and coordination of diverse infrastructure resources and services. Its core involves establishing interconnections between various elements to guarantee effective deployment and scalability, optimizing the entire process.', references: 'Work, S. (2022). What is IT Infrastructure Orchestration. [online] Pliant - The Orchestration Platform. Available at: https://pliant.io/what-is-it-infrastructure-orchestration/#:~:text=DevOps%20orchestration%20can%27t%20just [Accessed 23 Jul. 2023].' },

  { id: 10, term: 'Incident Management', description: 'Incident Management comprises a collection of protocols and practices devised to address and resolve disruptions or incidents that occur within the production environment. Its primary objective is to swiftly restore regular operations with minimal adverse effects on users.', references: 'www.ibm.com. (n.d.). IBM Cloud Pak for AIOps. [online] Available at: https://www.ibm.com/products/cloud-pak-for-aiops?utm_content=SRCWW&p1=Search&p4=43700074864115569&p5=p&gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zO0WKZDNPa2q6V06howoTBho4BBtDJ2R_o8LzBeQ3zvRm33aXYD6jMaAkgMEALw_wcB&gclsrc=aw.ds [Accessed 23 Jul. 2023].' },

  { id: 11, term: 'Immutable Infrastructure', description: 'Immutable Infrastructure is an approach where infrastructure components, once created, are never modified. Instead, any updates or changes result in the creation of entirely new components. This approach enhances reliability and simplifies maintenance and scaling, as there are no configuration drifts over time.', references: 'SearchITOperations. (n.d.). What is immutable infrastructure? - Definition from WhatIs.com. [online] Available at: https://www.techtarget.com/searchitoperations/definition/immutable-infrastructure#:~:text=Immutable%20infrastructure%20is%20an%20approach.' },

  //create an empoty boiler plate for the till id 20
  { id: 12, term: 'Continuous Testing', description: 'Continuous Testing is the practice of running automated tests throughout the software development lifecycle. It ensures that code changes are continuously verified for quality, functionality, and performance, helping to identify and address issues early in the development process.', references: 'Google Cloud. (n.d.). DevOps tech: Continuous testing. [online] Available at: https://cloud.google.com/architecture/devops/devops-tech-test-automation.' },
  
  { id: 13, term: 'Kubernetes (K8s)', description: 'Kubernetes, commonly shortened to K8s, represents an open-source container orchestration platform. Its primary function is to automate the deployment, scaling, and administration of applications packaged within containers. Kubernetes offers capabilities for deploying containers, distributing workloads, adjusting capacity, and autonomously recovering from failures, establishing its significance as a cornerstone tool in contemporary DevOps methodologies.', references: 'www.redhat.com. (n.d.). What is Kubernetes? [online] Available at: https://www.redhat.com/en/topics/containers/what-is-kubernetes#:~:text=Kubernetes%20in%20production- [Accessed 17 Sep. 2023].' },

  { id: 14, term: 'Deployment Frequency', description: 'Deployment frequency is a measure of how often new updates or changes to software are released to users. It is a crucial metric in DevOps, indicating how quickly a development team can deliver improvements or fixes to the production environment. Higher deployment frequency suggests efficient and agile development processes, enabling rapid responses to user needs and issues', references: 'LinearB. (n.d.). Using Metrics to Achieve a Good Deployment Frequency. [online] Available at: https://linearb.io/blog/deployment-frequency# [Accessed 17 Sep. 2023]' },
  
  { id: 15, term: 'Configuration Management', description: 'Configuration Management is the practice of automating the management and tracking of software configurations and infrastructure. It ensures consistency and prevents configuration drift in a dynamic environment.', references: 'BrowserStack. (n.d.). Introduction to Configuration Management in DevOps. [online] Available at: https://www.browserstack.com/guide/configuration-management-in-devops.' },
  
  { id: 16, term: 'Kanban', description: 'Kanban is a visual project management method used to optimize workflows and enhance productivity. In DevOps, Kanban boards are often employed to visualize the status of tasks and facilitate the continuous flow of work.', references: 'Atlassian (n.d.). Kanban - A brief introduction. [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban#:~:text=Kanban%20is%20a%20popular%20framework.' },
  
  { id: 17, term: 'Incident Response', description: 'Incident Response refers to the organized and systematic approach taken to address and manage security breaches or other critical incidents. It involves detecting, investigating, and mitigating the impact of security threats.', references: 'PagerDuty. (n.d.). What is Incident Response? [online] Available at: https://www.pagerduty.com/resources/learn/what-is-incident-response/#:~:text=Incident%20response%20(IR)%20is%20a.' },
  
  { id: 18, term: 'Containerization', description: 'Containerization is a technology enabling the bundling of applications along with their prerequisites into containers. These containers offer a uniform and self-contained environment for executing applications, simplifying the process of deployment and management across diverse computing environments.', references: 'Aqua. (n.d.). Container DevOps: Building Containers into the DevOps Process. [online] Available at: https://www.aquasec.com/cloud-native-academy/docker-container/container-devops/#:~:text=What%20Does%20Containerization%20Mean%20for.' },
  
  { id: 19, term: 'Serverless Computing', description: 'Serverless computing is a cloud computing model where cloud providers manage the infrastructure, and developers focus solely on writing code. It abstracts server management tasks, enabling automatic scaling and cost efficiency.', references: 'azure.microsoft.com. (n.d.). Serverless computing and applications | Microsoft Azure. [online] Available at: https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-serverless-computing/ [Accessed 18 Sep. 2023].' },
  
  { id: 20, term: 'Reliability', description: 'In DevOps, "reliability" means that a system or application consistently functions correctly and predictably, with minimal downtime or errors. It emphasizes building and maintaining systems that users can trust to perform reliably even as they evolve and face varying levels of demand.', references: 'Tang, J.J. (2021). Defining Availability, Maintainability and Reliability in SRE. [online] DevOps.com. Available at: https://devops.com/defining-availability-maintainability-and-reliability-in-sre/.' },

  

];

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

// Route to display the table
app.get('/', (req, res) => {
  res.render('index', { tableData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

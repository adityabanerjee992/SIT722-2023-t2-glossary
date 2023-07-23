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
  // Add more data as needed
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

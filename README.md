# Project Overview
This project is the final part of an assignment aimed at developing a secure, feature-rich employee portal using the MERN stack. This portal is designed to prioritize security and usability, adhering to the key objectives:

- Secure data transmission using SSL, along with hashing and salting for password security.
- Static login tailored to employee access.
- Integration of DevSecOps practices using CircleCI for CI/CD and SonarQube for security checks.
- Additional features to enhance user experience and project uniqueness.

# Features and Implementation

### 1. Security
- SSL on Both Frontend and Backend: SSL certificates are implemented to ensure encrypted communication between the client and server.
- Password Hashing and Salting: For enhanced password security, passwords are hashed and salted. Additional security measures include using middleware for setting HTTP headers and applying rate limiting to prevent brute-force attacks.

### 2. DevSecOps
- Continuous Integration (CI): CircleCI is set up to automate testing and deployment processes, triggered with each push to the GitHub repository.
- Code Quality and Security (DevSecOps): SonarQube is integrated to enforce security standards and code quality. Advanced implementations such as credential management ensure that credentials are dynamically handled using a secret manager to avoid hardcoding in the codebase. Automated Testing using Newman in Postman to run API tests in the CircleCI environment, and SonarQube configured rules to detect hardcoded secrets and static login information has also been used.

### 3. Static Login Feature
- Static Employee Login: This portal supports a static login without a registration feature. This feature limits access to only employees with pre-assigned credentials, reinforcing security.

### 4. User Experience Enhancements
The portal is designed with the following user experience enhancements to make it more engaging to the user:
- Responsive Design: Built with the MERN stack, using React for the frontend. Styling frameworks such as Bootstrap ensure a responsive and visually appealing interface.

## Setup and Installation

To get started with this project:

1. Clone the Repository
2. Install Dependencies
3. Configure Environment Variables
4. Run the Application
5. Testing:
   - Automated Tests: Run tests using Newman in CircleCI.
   - Code Quality Check: Run SonarQube analysis to check for security issues.

## Deployment and Continuous Integration

The CI/CD pipeline is configured to run automatically upon each push to the repository, triggering the following steps:

- Build and Test: CircleCI performs build and unit tests.
- Code Quality and Security Check: SonarQube scans for code vulnerabilities.
- Deployment: Automatic deployment to a staging/production server if all checks pass.

![image](https://github.com/user-attachments/assets/0e2f5abd-9fc4-40fb-8c2e-8d7b9f938673)

![image](https://github.com/user-attachments/assets/06525fec-0611-45a1-8f1c-bb83e75bfa32)

![image](https://github.com/user-attachments/assets/56980622-6c46-468e-8086-84036485a1fc)

![image](https://github.com/user-attachments/assets/7249d66d-90e2-4498-9503-cf54416bf6ba)


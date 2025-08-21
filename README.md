# Hands-On Project: Terraform with AWS for the SAA-C03 Certification

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](/README.pt-br.md)

This repository is a practical, hands-on project created to serve as a study guide and a demonstration of knowledge for the **AWS Solutions Architect - Associate (SAA-C03) Certification**. The focus is on infrastructure as code (IaC) automation using **Terraform** to provision a modern and scalable architecture on AWS.

### 📚 Project Purpose

The main goal of this project is to solidify theoretical knowledge from the AWS SAA-C03 certification through practical application. Instead of using the AWS console to provision resources, the entire infrastructure is managed by Terraform.

This project demonstrates:

- **Infrastructure as Code (IaC):** The use of Terraform to define and provision resources in a declarative and repeatable manner.
- **AWS Best Practices:** Configuring a secure, low-cost architecture to host a static website.
- **CI/CD Automation:** The use of GitHub Actions to create a continuous delivery pipeline, automating the build and deployment of the application.

### 🚀 Solution Architecture

The architecture provisioned by Terraform is robust and uses managed AWS services to ensure high availability, scalability, and performance.

- **Amazon S3 (Simple Storage Service):** The S3 bucket is the central point for static website storage. It is configured with the _Static Website Hosting_ option enabled.
- **Amazon CloudFront:** Acting as a content delivery network (CDN), CloudFront distributes content from S3 globally, reducing latency for users. It also adds a layer of security and caching, optimizing page load times.
- **GitHub Actions:** The CI/CD pipeline on GitHub automates the Next.js project's build process and the deployment of static files to the S3 bucket, ensuring the website is always up-to-date with the latest code version.

![Diagram](/public/diagram/terraform-aws-saa-c03-hands-on-app-Page-7.drawio.svg)

### 💻 Technologies Used

- **Terraform:** IaC tool for provisioning and managing infrastructure on AWS.
- **AWS:** Cloud service provider.
- **Next.js (with App Router):** React.js framework used to build the static application, which will be generated with `output: 'export'`.
- **Node.js:** Runtime environment for the Next.js project build.
- **GitHub Actions:** CI/CD service for workflow automation.

### ⚙️ How the Automation Works

This project optimizes the deployment of your infrastructure and static website on AWS through an automated **CI/CD** pipeline. Here’s how it works:

1.  **Infrastructure Development:** You define or update your AWS infrastructure using **Terraform** in the `.tf` files located in the `infra/` directory of the repository.
2.  **Commit and Push:** When you make a `git commit` and `git push` to the remote repository, the GitHub Actions pipeline is automatically triggered.
3.  **GitHub Actions Pipeline Execution:**
    - The workflow starts by **checking out** your code.
    - It assumes a specific **IAM Role** in your AWS account, ensuring secure access via **OIDC**.
    - It runs `terraform init`, which configures the **S3 backend** for **statefile** storage and the **DynamoDB table** for **state locking**, preventing conflicts.
    - It performs `terraform plan` to generate and display a summary of the proposed changes to your infrastructure.
    - It executes `terraform apply --auto-approve` to apply these changes, provisioning or updating resources on AWS.
    - **Next.js Build:** The pipeline installs Node.js dependencies and runs the `npm run build` command for Next.js.
    - **Content Upload:** After the build, the static files from the `src/out/` directory are synced to the **S3 bucket** using `aws s3 sync --delete`, ensuring your site is always updated and accessible.
4.  **Updated Infrastructure and Website:** Your AWS infrastructure is provisioned or updated according to the Terraform configurations, and your static website becomes immediately available.

![Diagram](/public/diagram/terraform-aws-saa-c03-hands-on-app-Page-1.drawio.svg)

### 🎯 How to Run

This project uses **Terraform** to provision infrastructure and **GitHub Actions** for CI/CD automation, ensuring a static site deployment on AWS. Follow the steps below to configure and run it in your environment:

#### 1. AWS Prerequisites

Before you begin, ensure your AWS account is configured with the following resources:

- **OIDC Provider for GitHub Actions:** Configure an identity provider (OIDC) in AWS IAM to allow GitHub Actions to securely assume an **IAM Role**. For a detailed guide, consult the official AWS documentation: [Use IAM roles to connect GitHub Actions to actions in AWS](https://aws.amazon.com/blogs/security/use-iam-roles-to-connect-github-actions-to-actions-in-aws/).
- **Dedicated IAM Role:** Create a specific IAM Role for GitHub Actions. It will need the **necessary permission policies** to manage all your infrastructure resources, including:
  - **S3:** Create and configure buckets, manage objects.
  - **DynamoDB:** Create and access lock tables for Terraform.
  - **CloudFront:** Create, configure, and manage distributions, OACs (Origin Access Controls), and cache policies.
- **S3 Bucket for Statefile:** Have an S3 bucket pre-created and dedicated to storing your **Terraform Statefile**. This bucket is crucial for managing your infrastructure's state and should have **versioning enabled** to allow for rollbacks.
- **DynamoDB Table for State Locking:** Create a table in DynamoDB to be used as a **state locking** mechanism by Terraform. This prevents multiple Terraform runs from corrupting the `statefile` in collaborative environments. The table must have a **Partition Key** named `LockID` of type `String`.

#### 2. GitHub Repository Configuration

After configuring your AWS account, you'll need to set up secrets in your GitHub repository so the GitHub Actions pipeline can interact with AWS.

Navegue até **Settings** > **Secrets and variables** > **Actions** no seu repositório GitHub e adicione as seguintes secrets:

- `AWS_ROLE_ARN`: The ARN of the IAM Role that GitHub Actions will assume (e.g., `arn:aws:iam::123456789012:role/github-actions-role`).
- `AWS_STATEFILE_S3_BUCKET`: The name of the S3 bucket where your Terraform Statefile will be stored.
- `AWS_LOCK_DYNAMODB_TABLE`: The name of the DynamoDB table configured for Terraform state locking.

#### 3. Follow the Pipeline

After `git push`, the GitHub Actions pipeline will execute automatically. You can monitor its progress in the **Actions** tab of your GitHub repository. The pipeline will provision or update the AWS infrastructure and then upload your static site files to the configured S3 bucket.

### ©️ Copyright

**Developed by** [Andresinho20049](https://andresinho20049.com.br/)
**Project:** _terraform-aws-saa-c03-hands-on-app_

**Description:**
This project is a practical demonstration for the AWS Solutions Architect - Associate (SAA-C03) certification, focusing on implementing a **serverless** architecture. It uses Terraform to provision and manage a static website on AWS, leveraging services like S3 and CloudFront that ensure high scalability and low cost without the need to manage servers.

This project complements another portfolio work available at [https://github.com/andresinho20049/terraform-aws-with-autoscaling-course](https://github.com/andresinho20049/terraform-aws-with-autoscaling-course). While this project covers serverless solutions, the other focuses on **provisioned** architectures, using services like **VPC, EC2, and Application Load Balancer** to demonstrate the design of larger, more complex solutions with high availability.

Together, the two projects showcase a comprehensive understanding of foundational AWS architectures. They serve as a set of practical studies that validate the knowledge of creating and implementing robust systems, covering both serverless and provisioned models, which is essential for any solutions architect.

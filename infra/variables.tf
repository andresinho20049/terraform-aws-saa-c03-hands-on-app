variable "account_username" {
  description = "The AWS account username"
  type        = string
  nullable = false
}

variable "region" {
  description = "The AWS region to deploy the resources in"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "The environment for the deployment (e.g., dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "app_name" {
  description = "The app_name of the deployment (e.g., static-site, api)"
  type        = string
  nullable = false
}

variable "project_name" {
  description = "The project name for tagging purposes"
  type        = string
  nullable = false
}
# Terraform configuration for S3 static site hosting

module "s3_static_site" {
  source = "./modules/s3"

  account_id       = var.account_id
  account_username = var.account_username
  region           = var.region
  app_name         = var.app_name
  environment      = var.environment
  project_name     = var.project_name
}
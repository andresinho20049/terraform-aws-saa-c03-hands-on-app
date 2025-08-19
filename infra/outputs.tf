output "cloudfront_url" {
  value       = module.s3_static_site.cloudfront_url
  description = "The HTTPS URL of the CloudFront distribution for the S3 static site."
}

output "s3_static_site_bucket_name" {
  value = module.s3_static_site.s3_static_site_bucket_name
  description = "The name of the S3 bucket for the static site."
}
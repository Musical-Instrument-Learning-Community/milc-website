variable "domain_name" {
  type        = string
  description = "The domain name for the website."
}

variable "bucket_name" {
  type        = string
  description = "The name of the bucket without the www. prefix. Normally domain_name."
}

variable "hosted_zone_name" {
  description = "hosted_zone_name"
}

variable "common_tags" {
  description = "Common tags you want applied to all components."
}

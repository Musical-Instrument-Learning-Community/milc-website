# terraform {
#   required_version = "~> 0.14"

#   required_providers {
#     aws = {
#       source  = "hashicorp/aws"
#       version = "~> 3.0"
#     }
#   }

#   backend "s3" {
#     bucket = "yourdomain-terraform"
#     key    = "prod/terraform.tfstate"
#     region = "ap-southeast-2"
#   }
# }

provider "aws" {
  region = "ap-southeast-2"
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"
}

provider "aws" {
    alias = "dns_zones"
    region = "ap-southeast-2"
    # ... access keys etc/assume role block
}
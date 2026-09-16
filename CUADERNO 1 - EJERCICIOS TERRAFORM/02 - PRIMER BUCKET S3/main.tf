terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

data "aws_caller_identity" "current" {}

resource "aws_s3_bucket" "bucket_aula" {
  bucket = "terraform-aula-${data.aws_caller_identity.current.account_id}"

  tags = {
    Name    = "terraform-s3-aula"
    Entorno = "Aula"
  }
}

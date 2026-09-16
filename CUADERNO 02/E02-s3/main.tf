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

resource "aws_s3_bucket" "bucket_aula" {
  bucket = "tf01-solucion-referencia-alumno-2026"

  tags = {
    Name    = "terraform-s3-aula"
    Entorno = "Aula"
  }
}

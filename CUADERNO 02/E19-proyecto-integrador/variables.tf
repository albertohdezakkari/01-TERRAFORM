variable "region" {
  type    = string
  default = "us-east-1"
}

variable "vpc_cidr" {
  type = string
}

variable "subnet_publica_cidr" {
  type = string
}

variable "subnet_privada_cidr" {
  type = string
}

variable "nombre_proyecto" {
  type = string
}

variable "bucket_name" {
  type = string
}

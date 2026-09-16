variable "vpc_cidr" {
  description = "Rango CIDR de la VPC"
  type        = string
  default     = "10.10.0.0/16"
}

variable "nombre_vpc" {
  description = "Nombre visible de la VPC"
  type        = string
  default     = "vpc-aula"
}

variable "entorno" {
  description = "Entorno de despliegue"
  type        = string
  default     = "DEV"
}

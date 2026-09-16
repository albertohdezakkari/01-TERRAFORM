# 01 - TERRAFORM

Soluciones del **CUADERNO 1 - EJERCICIOS TERRAFORM**.

Cada ejercicio es completamente independiente. Entra en la carpeta del ejercicio que quieras realizar y ejecuta Terraform desde allí.

## Estructura

```text
CUADERNO 1 - EJERCICIOS TERRAFORM/
├── 00 - CONFIGURACION AWS ACADEMY/
├── 01 - PRIMERA EC2/
├── 02 - PRIMER BUCKET S3/
├── 03 - ENTENDER UNA VPC/
└── 04 - CREAR DOS SUBREDES/
```

## Flujo habitual

```bash
terraform init
terraform validate
terraform plan
terraform apply
```

Al finalizar una práctica con recursos creados:

```bash
terraform destroy
```

## Seguridad

Nunca subas credenciales de AWS Academy a GitHub.

Las credenciales deben cargarse temporalmente desde la terminal mediante variables de entorno.

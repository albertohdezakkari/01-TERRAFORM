# 02 — Primer bucket S3

## Objetivo
Crear un bucket S3 con Terraform y reforzar el ciclo `init → validate → plan → apply → destroy`.

El nombre real del bucket se genera con el ID de la cuenta para reducir colisiones.

## Ejecución
```bash
terraform init
terraform validate
terraform plan
terraform apply
```

## Limpieza
```bash
terraform destroy
```

> AWS Academy puede restringir algunas operaciones S3. Si aparece `AccessDenied`, comprueba primero las credenciales con `aws sts get-caller-identity`.

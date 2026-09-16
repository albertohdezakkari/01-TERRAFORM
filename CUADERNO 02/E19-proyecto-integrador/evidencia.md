# Evidencia — Proyecto integrador Terraform

## Qué he construido o analizado
Proyecto integrado con provider parametrizado, VPC, dos subnets, Security Group, data source de AMI, EC2 en subnet pública, bucket S3, variables, tfvars y outputs.

## Qué comandos he ejecutado realmente
`terraform fmt`, `validate`, `plan`, `apply`, `output` y `destroy` no se han ejecutado en esta generación; se marcan NO_VERIFICABLE.

## Qué resultado he obtenido
La arquitectura y las referencias son verificables en código. Los IDs, IP pública y existencia real de recursos son NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Las variables separan código y valores; tfvars asigna datos. El data source consulta una AMI existente. Las referencias construyen dependencias entre VPC, subnet, SG y EC2. Los outputs exponen valores útiles. `plan` debe revisarse antes de `apply` y `destroy` debe revisarse antes de confirmar. El bucket usa un nombre configurable y no contiene secretos.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

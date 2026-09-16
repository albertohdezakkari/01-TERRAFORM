# Evidencia — Entender y crear una VPC

## Qué he construido o analizado
Una VPC con CIDR `10.10.0.0/16` y etiqueta Name.

## Qué comandos he ejecutado realmente
`terraform state list` y `terraform plan` no se ejecutaron; NO_VERIFICABLE.

## Qué resultado he obtenido
El código define el estado deseado; el estado real de AWS y el state local son NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Una VPC es una red virtual privada. `/16` define el prefijo de red de un rango CIDR amplio. `main.tf` expresa el estado deseado; Terraform state relaciona direcciones Terraform con recursos reales; AWS aloja el recurso real.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

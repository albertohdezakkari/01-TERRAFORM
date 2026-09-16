# Evidencia — Reutilizar código con tfvars y entornos

## Qué he construido o analizado
Un mismo `main.tf` reutilizado con `dev.tfvars` y `test.tfvars`.

## Qué comandos he ejecutado realmente
Los planes con `-var-file` no se han ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
DEV usaría 10.10.0.0/16 / vpc-dev / DEV; TEST usaría 10.20.0.0/16 / vpc-test / TEST.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`variables.tf` declara entradas; `main.tf` describe recursos y consume `var.*`; los `.tfvars` asignan datos concretos. `-var-file` permite seleccionar el conjunto de valores sin duplicar código.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

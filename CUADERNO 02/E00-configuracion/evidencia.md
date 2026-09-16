# Evidencia — Configurar AWS Academy, AWS CLI y Terraform

## Qué he construido o analizado
Proyecto Terraform mínimo con provider AWS en `us-east-1`. Las credenciales se cargarían mediante variables de entorno y nunca dentro del código.

## Qué comandos he ejecutado realmente
`terraform init`, `terraform validate`, `aws --version`, `terraform version` y `aws sts get-caller-identity` no se han ejecutado en esta generación; se marcan NO_VERIFICABLE.

## Qué resultado he obtenido
El código puede revisarse estáticamente. La autenticación y las versiones de herramientas son NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
AWS Academy entrega credenciales temporales; las variables de entorno permiten que AWS CLI y Terraform las consuman sin escribirlas en el proyecto. AWS CLI ejecuta órdenes directas; Terraform describe y gestiona infraestructura. PATH determina dónde busca el sistema los ejecutables. `terraform init` prepara el proyecto y `validate` comprueba la configuración.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

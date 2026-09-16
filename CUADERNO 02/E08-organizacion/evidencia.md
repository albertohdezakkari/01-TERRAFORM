# Evidencia — Cuando main.tf empieza a crecer

## Qué he construido o analizado
Configuración separada por responsabilidades en `providers.tf`, `network.tf` y `security.tf`.

## Qué comandos he ejecutado realmente
`terraform validate` y `terraform plan` no se ejecutaron; NO_VERIFICABLE.

## Qué resultado he obtenido
Las referencias entre archivos pueden comprobarse estáticamente.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Todos los `.tf` de una carpeta forman el mismo módulo raíz y Terraform los carga conjuntamente; el nombre de archivo no establece orden de ejecución. Separar provider, red y seguridad mejora la mantenibilidad sin crear módulos distintos.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

# Evidencia — Crear tu primer bucket S3 con Terraform

## Qué he construido o analizado
Un bucket S3 con nombre real personalizado y etiquetas `Name` y `Entorno`.

## Qué comandos he ejecutado realmente
No se ha ejecutado `terraform plan/apply/destroy`; NO_VERIFICABLE.

## Qué resultado he obtenido
El código define un bucket. La existencia real y la disponibilidad global del nombre son NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
S3 almacena objetos en buckets. `bucket_aula` es el nombre interno Terraform y no necesita ser globalmente único; el valor de `bucket` sí identifica el bucket real y debe ser único en el espacio de nombres de S3. Conviene revisar `plan` antes de `apply`.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

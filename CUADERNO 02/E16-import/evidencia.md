# Evidencia — Importar infraestructura existente

## Qué he construido o analizado
Bloque `aws_vpc.vpc_importada` preparado para asociar una VPC de laboratorio existente mediante `terraform import`.

## Qué comandos he ejecutado realmente
No se ha importado ningún recurso real porque no se dispone de una VPC de laboratorio identificable en esta generación; `import`, `state list` y `plan` son NO_VERIFICABLE.

## Qué resultado he obtenido
No se inventa un ID real. Se muestra únicamente el patrón de comando con `vpc-XXXXXXXX`.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`terraform import` vincula una dirección Terraform con un recurso real existente en el state; no genera por sí solo una configuración perfecta. Configuración, state y recurso real son tres piezas distintas. Importar recursos existentes exige especial cuidado porque una vez gestionados por Terraform operaciones posteriores pueden modificarlos o destruirlos.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
No se utiliza ningún recurso compartido ni crítico.

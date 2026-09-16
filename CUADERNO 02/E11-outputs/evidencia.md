# Evidencia — Mostrar resultados con outputs

## Qué he construido o analizado
VPC con outputs `vpc_id` y `vpc_cidr`.

## Qué comandos he ejecutado realmente
`terraform apply` y `terraform output` no se ejecutaron; NO_VERIFICABLE.

## Qué resultado he obtenido
`vpc_cidr` es conocido por configuración; `vpc_id` lo genera AWS al crear el recurso y por tanto su valor real es NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Un output expone atributos útiles de recursos o datos. El ID real lo asigna AWS al crear la VPC. Un output no crea recursos: solo publica valores de la configuración/estado.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

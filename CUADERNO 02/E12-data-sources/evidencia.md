# Evidencia — Consultar AWS con data sources

## Qué he construido o analizado
Data source `aws_ami` que localiza una AMI reciente de Amazon Linux 2023 y expone ID y nombre.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
El data source y filtros se verifican en código; el ID concreto resuelto es NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`data` consulta información existente y `resource` crea/gestiona. `data.aws_ami.amazon_linux.id` se lee como: data source → tipo aws_ami → nombre interno amazon_linux → atributo id.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

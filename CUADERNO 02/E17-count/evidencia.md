# Evidencia — Crear varios recursos con count

## Qué he construido o analizado
Una VPC /16 y tres subnets /24 creadas con un único recurso `aws_subnet` y `count = 3`.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
El cálculo está expresado en código.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`count` crea varias instancias homogéneas y `count.index` vale 0,1,2 para count=3. `cidrsubnet` parte de /16 y añade 8 bits para generar /24; `count.index + 1` selecciona los bloques 1,2 y 3. Esto reduce duplicación.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

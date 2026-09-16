# Evidencia — Crear recursos identificados con for_each

## Qué he construido o analizado
Dos subnets creadas desde un mapa con `for_each`, `each.key` y `each.value`.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
Las identidades lógicas se verifican en código.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`for_each` crea una instancia por clave del mapa. `each.key` es la identidad (`publica`, `privada`) y `each.value` el CIDR. Frente a count, las direcciones del recurso son más expresivas y estables porque dependen de claves lógicas, no solo de posiciones numéricas.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

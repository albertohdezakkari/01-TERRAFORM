# Evidencia — Modificar infraestructura y leer terraform plan

## Qué he construido o analizado
VPC 10.50.0.0/16 cuyo estado deseado final cambia la etiqueta de `vpc-original` a `vpc-modificada`.

## Qué comandos he ejecutado realmente
El apply inicial y el plan posterior no se han ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
El cambio final está representado en el código; la salida real del plan es NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`terraform plan` compara estado actual/deseado. `+` crear, `~` modificar, `-` destruir y `-/+` reemplazar. Cambiar una etiqueta suele ser una actualización in-place; cambiar atributos inmutables puede forzar reemplazo. Siempre hay que leer el plan antes de aplicar.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

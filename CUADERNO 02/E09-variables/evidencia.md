# Evidencia — Introducir variables en Terraform

## Qué he construido o analizado
Variables `vpc_cidr`, `nombre_vpc` y `entorno` declaradas como string y consumidas con `var.*`.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
Los valores por defecto se pueden verificar en `variables.tf`.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Declarar una variable define su interfaz (nombre/tipo y opcionalmente default); asignarla significa proporcionar un valor concreto. `var.nombre` consume el valor. Una variable no es un gestor de secretos: si contiene secretos, todavía hay que evitar versionarlos y gestionar su exposición.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

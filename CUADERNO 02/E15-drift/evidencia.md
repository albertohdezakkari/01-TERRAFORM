# Evidencia — Detectar drift entre Terraform y AWS

## Qué he construido o analizado
Configuración deseada de una VPC con `Name = vpc-terraform` y análisis del procedimiento de drift.

## Qué comandos he ejecutado realmente
No se ha ejecutado apply ni se ha realizado modificación manual en AWS; por tanto la detección real del drift es NO_VERIFICABLE.

## Qué resultado he obtenido
El comportamiento esperado está documentado, pero no se afirma que se haya producido una modificación real.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Drift es la divergencia entre el estado deseado definido por IaC y el recurso real. Un cambio manual fuera de Terraform puede producirlo. Tras refrescar/planificar, Terraform compara y puede proponer volver al estado deseado.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.

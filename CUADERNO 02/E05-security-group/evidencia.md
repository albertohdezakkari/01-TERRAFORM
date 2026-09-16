# Evidencia — Proteger recursos con Security Groups

## Qué he construido o analizado
VPC, subnet y Security Group que permite entrada TCP/80 desde cualquier IPv4 y salida completa. No existe SSH abierto globalmente.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
El código permite verificar las reglas estáticamente.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Un Security Group es un firewall stateful asociado a recursos dentro de una VPC. `ingress` controla entrada y `egress` salida. El puerto 80 corresponde normalmente a HTTP. `0.0.0.0/0` representa cualquier IPv4; se limita al puerto 80, no a todos los puertos. El mínimo privilegio evita abrir servicios innecesarios.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
No se ha añadido ninguna regla SSH 0.0.0.0/0.

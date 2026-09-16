# Evidencia — Dividir una VPC en dos subredes

## Qué he construido o analizado
VPC `10.10.0.0/16` con subnets `10.10.1.0/24` y `10.10.2.0/24`, no solapadas, enlazadas por `aws_vpc.vpc_aula.id`.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
El código demuestra las dos subnets y su referencia a la VPC.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Una subnet es una subdivisión de la VPC. De /16 a /24 se añaden 8 bits al prefijo; quedan 8 bits de host y 2^8 = 256 direcciones totales por /24. Los rangos 10.10.1.0/24 y 10.10.2.0/24 están dentro de 10.10.0.0/16 y no se solapan. La referencia evita copiar un ID AWS generado dinámicamente.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
